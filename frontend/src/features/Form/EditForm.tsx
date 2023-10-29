import { Button, TextInputField, TickIcon } from 'evergreen-ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { TeacherInfo } from '../../types/TeachersInfo.ts'
import { teacherSchema } from '../../schema/teacherCreateSchema.ts'
import { useCustomNav } from '../../hooks/useCustomNav.ts'
import { ErrorAlert } from '../../components/ErrorAlert.tsx'
import { useTeacherRequestAPI } from '../../hooks/useTeacherRequestAPI.ts'

type EditFormProps = {
  id: number
  userName: string
  email: string
}

export const EditForm: FC<EditFormProps> = ({ userName, email, id }) => {
  const { navTop } = useCustomNav()
  const { hasError, sendRequest } = useTeacherRequestAPI()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeacherInfo>({
    resolver: zodResolver(teacherSchema),
    defaultValues: {
      id: id,
      userName: userName,
      email: email,
    },
  })

  const onSubmit = async (data: TeacherInfo) => {
    try {
      await sendRequest({
        apiPath: `${data.id}`,
        method: 'PUT',
        data: data,
      })
      navTop()
    } catch (error) {
      console.error('There was an error:', error)
    }
  }

  return (
    <>
      {hasError && <ErrorAlert />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input id="userId" type={'hidden'} {...register('id')} value={id} />
        <TextInputField
          id="userName"
          label="Username"
          {...register('userName')}
          isInvalid={!!errors.userName}
          description="Enter your username."
          validationMessage={
            errors.userName?.message && `${errors.userName?.message}`
          }
          placeholder="Username"
        />

        <TextInputField
          id="email"
          label="Email"
          {...register('email')}
          isInvalid={!!errors.email}
          description="Enter your email."
          validationMessage={
            errors.email?.message && `${errors.email?.message}`
          }
          placeholder="Email"
        />
        <Button
          marginY={8}
          marginRight={12}
          iconAfter={TickIcon}
          type={'submit'}
        >
          Save
        </Button>
        <Button marginY={8} marginRight={12} onClick={navTop}>
          Back top Top
        </Button>
      </form>
    </>
  )
}

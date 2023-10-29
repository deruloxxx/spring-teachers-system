import { Button, PlusIcon, TextInputField } from 'evergreen-ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TeacherCreateData } from '../../types/TeachersInfo.ts'
import { teacherCreateSchema } from '../../schema/teacherCreateSchema.ts'
import { useCustomNav } from '../../hooks/useCustomNav.ts'
import { useTeacherRequestAPI } from '../../hooks/useTeacherRequestAPI.ts'
import { ErrorAlert } from '../../components/ErrorAlert.tsx'

export const CreateForm = () => {
  const { navTop } = useCustomNav()
  const { hasError, sendRequest } = useTeacherRequestAPI()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeacherCreateData>({
    resolver: zodResolver(teacherCreateSchema),
  })

  const onSubmit = async (data: TeacherCreateData) => {
    try {
      await sendRequest({
        method: 'POST',
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
          iconAfter={PlusIcon}
          type={'submit'}
        >
          Create
        </Button>
        <Button marginY={8} marginRight={12} onClick={navTop}>
          Back top Top
        </Button>
      </form>
    </>
  )
}

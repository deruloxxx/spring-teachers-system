import { Button, TextInputField, TickIcon } from 'evergreen-ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { TeacherInfo } from '../../types/TeachersInfo.ts'
import { teacherSchema } from '../../schema/teacherCreateSchema.ts'
import { useCustomNav } from '../../hooks/useCustomNav.ts'
import { ErrorAlert } from '../../components/ErrorAlert.tsx'

type EditFormProps = {
  id: number
  userName: string
  email: string
}

export const EditForm: FC<EditFormProps> = ({ userName, email, id }) => {
  const [hasError, setHasError] = useState(false)
  const { navTop } = useCustomNav()

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

  const putTeacherData = async (data: TeacherInfo) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/teachers/${data.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )

      if (!response.ok) {
        throw new Error('Failed to post data')
      }

      const text = await response.text()
      if (text) {
        return JSON.parse(text)
      }
      return null
    } catch (error) {
      console.error('There was an error:', error)
      setHasError(true)
    }
  }

  const onSubmit = async (data: TeacherInfo) => {
    try {
      await putTeacherData(data)
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

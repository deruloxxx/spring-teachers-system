import { Button, PlusIcon, TextInputField } from 'evergreen-ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TeacherCreateData } from '../../types/TeachersInfo.ts'
import { teacherCreateSchema } from '../../schema/teacherCreateSchema.ts'
import { useCustomNav } from '../../hooks/useCustomNav.ts'
import { useState } from 'react'
import { ErrorAlert } from '../../components/ErrorAlert.tsx'

export const CreateForm = () => {
  const [hasError, setHasError] = useState(false)
  const { navTop } = useCustomNav()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeacherCreateData>({
    resolver: zodResolver(teacherCreateSchema),
  })

  const postTeacherData = async (data: TeacherCreateData) => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to post data')
      }

      const text = await response.text()
      if (text) {
        return JSON.parse(text)
      }
    } catch (error) {
      console.error('There was an error:', error)
      setHasError(true)
    }
  }

  const onSubmit = async (data: TeacherCreateData) => {
    try {
      await postTeacherData(data)
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

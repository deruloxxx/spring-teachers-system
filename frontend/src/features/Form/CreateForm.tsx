import { Button, PlusIcon, TextInputField } from 'evergreen-ui'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UserData, userCreateSchema } from '../../schema/userCreateSchema.ts'
import { zodResolver } from '@hookform/resolvers/zod'

export const CreateForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(userCreateSchema),
  })

  const postTeacherData = async (data: UserData) => {
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
      return null
    } catch (error) {
      console.error('There was an error:', error)
    }
  }

  const onSubmit = async (data: UserData) => {
    try {
      await postTeacherData(data)
      navigate('/')
    } catch (error) {
      console.error('There was an error:', error)
    }
  }

  return (
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
        validationMessage={errors.email?.message && `${errors.email?.message}`}
        placeholder="Email"
      />
      <Button marginY={8} marginRight={12} iconAfter={PlusIcon} type={'submit'}>
        Save
      </Button>
    </form>
  )
}

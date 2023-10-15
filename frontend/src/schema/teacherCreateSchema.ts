import { z } from 'zod'

const baseTeacherSchema = {
  userName: z.string().min(1, { message: 'Please Enter Your Name' }),
  email: z.string().email({ message: 'Email address format is incorrect' }),
}

export const teacherSchema = z.object({
  id: z.number(),
  ...baseTeacherSchema,
})

export const teacherCreateSchema = z.object(baseTeacherSchema)

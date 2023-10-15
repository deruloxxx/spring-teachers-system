import { z } from 'zod'

export const userCreateSchema = z.object({
  userName: z.string().min(1, { message: 'Please Enter Your Name' }),
  email: z.string().email({ message: 'Email address format is incorrect' }),
})

export const userEditSchema = z.object({
  userId: z.number(),
  userName: z.string().min(1, { message: 'Please Enter Your Name' }),
  email: z.string().email({ message: 'Email address format is incorrect' }),
})

export type UserData = z.infer<typeof userCreateSchema>

export type UserEditData = z.infer<typeof userEditSchema>

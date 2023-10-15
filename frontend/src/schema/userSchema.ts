import { z } from 'zod'

export const userSchema = z.object({
  userName: z.string().min(1, { message: 'Please Enter Your Name' }),
  email: z.string().email({ message: 'Email address format is incorrect' }),
})

export type UserData = z.infer<typeof userSchema>

import { z } from 'zod'
import {
  teacherCreateSchema,
  teacherSchema,
} from '../schema/teacherCreateSchema.ts'

export type TeacherInfo = z.infer<typeof teacherSchema>

export type TeacherCreateData = z.infer<typeof teacherCreateSchema>

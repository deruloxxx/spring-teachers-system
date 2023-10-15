import { useNavigate } from 'react-router-dom'
import { TeacherInfo } from '../types/TeachersInfo.ts'

export const useCustomNav = () => {
  const navigate = useNavigate()

  const navTop = () => {
    navigate('/')
  }

  const navEdit = (itemData: TeacherInfo) => {
    navigate('/edit', { state: { item: itemData } })
  }

  const navCreate = () => {
    navigate('/create')
  }

  return {
    navTop,
    navEdit,
    navCreate,
  }
}

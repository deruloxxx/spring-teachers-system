import { useCustomNav } from '../hooks/useCustomNav.ts'

export const Title = () => {
  const { navTop } = useCustomNav()
  return (
    <h1 onClick={() => navTop()} style={{ cursor: 'pointer' }}>
      Teachers Management System
    </h1>
  )
}

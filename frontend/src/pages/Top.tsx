import { Teachers } from '../features/Teachers.tsx'
import { Wrapper } from '../components/Wrapper.tsx'

export const Top = () => {
  return (
    <Wrapper>
      {/* TODO create h1 component */}
      <h1>Teachers Management System</h1>
      <Teachers />
    </Wrapper>
  )
}

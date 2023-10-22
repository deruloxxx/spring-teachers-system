import { Teachers } from '../features/Teachers.tsx'
import { Wrapper } from '../components/Wrapper.tsx'
import { Title } from '../components/Title.tsx'

export const Top = () => {
  return (
    <Wrapper>
      <Title />
      <Teachers />
    </Wrapper>
  )
}

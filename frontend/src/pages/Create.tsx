import { Wrapper } from '../components/Wrapper.tsx'
import { CreateForm } from '../features/Form/CreateForm.tsx'
import { Heading } from 'evergreen-ui'
import { Title } from '../components/Title.tsx'

export const Create = () => {
  return (
    <Wrapper>
      <Title />
      <Heading marginBottom={14}>Create Form</Heading>
      <CreateForm />
    </Wrapper>
  )
}

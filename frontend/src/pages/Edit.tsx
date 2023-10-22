import { Wrapper } from '../components/Wrapper.tsx'
import { EditForm } from '../features/Form/EditForm.tsx'
import { useLocation } from 'react-router-dom'
import { Heading } from 'evergreen-ui'
import { Title } from '../components/Title.tsx'

export const Edit = () => {
  const location = useLocation()
  const item = location.state?.item

  return (
    <Wrapper>
      <Title />
      <Heading marginBottom={14}>Edit Form</Heading>
      <EditForm email={item?.email} userName={item?.userName} id={item?.id} />
    </Wrapper>
  )
}

import { Wrapper } from '../components/Wrapper.tsx'
import { EditForm } from '../features/Form/EditForm.tsx'
import { useLocation } from 'react-router-dom'

export const Edit = () => {
  const location = useLocation()
  const item = location.state?.item

  return (
    <Wrapper>
      <h1>Edit Form</h1>
      <EditForm email={item?.email} userName={item?.userName} id={item?.id} />
    </Wrapper>
  )
}

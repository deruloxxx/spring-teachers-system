import { Wrapper } from '../components/Wrapper.tsx'
import { Alert, Button, EditIcon, Pane } from 'evergreen-ui'
import { useNavigate } from 'react-router-dom'
import { Title } from '../components/Title.tsx'

export const NotFound = () => {
  const navigate = useNavigate()
  const onClickNavTop = () => {
    navigate('/')
  }

  return (
    <Wrapper>
      <Title />
      <Pane
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Alert intent="danger" title={'404'}>
          Page Not Found
        </Alert>
        <Button marginY={8} iconBefore={EditIcon} onClick={onClickNavTop}>
          GO TO TOP
        </Button>
      </Pane>
    </Wrapper>
  )
}

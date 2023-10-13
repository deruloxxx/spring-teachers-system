import { Button, PlusIcon, TextInputField } from 'evergreen-ui'
import { useNavigate } from 'react-router-dom'

// TODO POST API
export const EditForm = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    try {
      window.alert('submit')
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} method={'post'}>
      <TextInputField
        id="ids-are-optional"
        label="A required text input field"
        isInvalid={false}
        validationMessage="This field is required"
        description="This is a description."
        placeholder="Placeholder text"
      />
      <TextInputField
        id="ids-are-optional"
        label="A required text input field"
        description="This is a description."
        placeholder="Placeholder text"
        isInvalid={true}
        validationMessage="This field is required"
      />
      <Button marginY={8} marginRight={12} iconAfter={PlusIcon} type={'submit'}>
        Save
      </Button>
    </form>
  )
}

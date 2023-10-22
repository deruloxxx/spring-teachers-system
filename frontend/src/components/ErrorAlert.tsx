import { Alert, Pane } from 'evergreen-ui'

export const ErrorAlert = () => {
  return (
    <Pane marginBottom={24}>
      <Alert intent="danger" title="Failed.Please reload and try again" />
    </Pane>
  )
}

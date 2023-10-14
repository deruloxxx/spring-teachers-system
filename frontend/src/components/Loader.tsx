import { Pane, Spinner } from 'evergreen-ui'

export const Loader = () => {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={400}
    >
      <Spinner />
    </Pane>
  )
}

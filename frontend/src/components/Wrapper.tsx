import { Pane } from 'evergreen-ui'
import { FC } from 'react'

type WrapperProps = {
  children: React.ReactNode
}
export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <Pane maxWidth={1200} marginY={0} marginX={'auto'}>
      {children}
    </Pane>
  )
}

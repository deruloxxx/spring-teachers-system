import {
  Button,
  EditIcon,
  Pane,
  PlusIcon,
  Table,
  TrashIcon,
} from 'evergreen-ui'
import { PaginationNavi } from '../components/PaginationNavi.tsx'
import { useNavigate } from 'react-router-dom'

// TODO Fetch data from API
// TODO SP design
export const Teachers = () => {
  const navigate = useNavigate()

  const onClickNavEdit = () => {
    navigate('/edit')
  }
  return (
    <Pane>
      <Table.Body>
        <Table.Head>
          <Table.TextCell>ID</Table.TextCell>
          <Table.TextCell>Name</Table.TextCell>
          <Table.TextCell>Email</Table.TextCell>
          <Table.TextCell></Table.TextCell>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.TextCell>Fixed width</Table.TextCell>
            <Table.TextCell>Flex me col 2</Table.TextCell>
            <Table.TextCell>Flex me col 3</Table.TextCell>
            <Table.TextCell
              display={'flex'}
              alignItems={'center'}
              textAlign={'right'}
            >
              <Button
                marginY={8}
                marginRight={12}
                iconBefore={EditIcon}
                onClick={onClickNavEdit}
              >
                Edit
              </Button>
              {/* POSTする */}
              <Button
                marginY={8}
                marginRight={12}
                iconBefore={TrashIcon}
                intent="danger"
              >
                Delete
              </Button>
            </Table.TextCell>
          </Table.Row>
        </Table.Body>
      </Table.Body>
      <Pane
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Button marginY={8} marginRight={12} iconAfter={PlusIcon}>
          New Teacher
        </Button>
        <PaginationNavi />
      </Pane>
    </Pane>
  )
}

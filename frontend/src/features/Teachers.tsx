import {
  Button,
  EditIcon,
  Pane,
  PlusIcon,
  Table,
  TrashIcon,
} from 'evergreen-ui'
import { PaginationNavi } from '../components/PaginationNavi.tsx'
import useTeachersInfo from '../hooks/useTeachersInfo.ts'
import { Loader } from '../components/Loader.tsx'
import { deleteTeacherById } from '../utils/deleteTeacherById.ts'
import { useCustomNav } from '../hooks/useCustomNav.ts'

export const Teachers = () => {
  const { loading, data, setData } = useTeachersInfo()
  const { navEdit, navCreate } = useCustomNav()
  const handleDelete = async (id: number) => {
    const success = await deleteTeacherById(id)
    if (success && data) {
      const updatedData = data.filter((teacher) => teacher.id !== id)
      setData(updatedData)
    }
  }

  return (
    <Pane>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Table.Body>
            <Table.Head>
              <Table.TextCell>ID</Table.TextCell>
              <Table.TextCell>Name</Table.TextCell>
              <Table.TextCell>Email</Table.TextCell>
              <Table.TextCell></Table.TextCell>
            </Table.Head>
            <Table.Body>
              {data &&
                data.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.TextCell>{item.id}</Table.TextCell>
                    <Table.TextCell>{item.userName}</Table.TextCell>
                    <Table.TextCell>{item.email}</Table.TextCell>
                    <Table.TextCell textAlign={'right'}>
                      <Button
                        marginY={8}
                        marginRight={12}
                        iconBefore={EditIcon}
                        onClick={() => navEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        marginY={8}
                        marginRight={12}
                        iconBefore={TrashIcon}
                        intent="danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </Table.TextCell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table.Body>
          <Pane
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              marginY={8}
              marginRight={12}
              iconAfter={PlusIcon}
              onClick={navCreate}
            >
              New Teacher
            </Button>
            <PaginationNavi />
          </Pane>
        </>
      )}
    </Pane>
  )
}

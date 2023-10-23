import {
  Button,
  EditIcon,
  Pagination,
  Pane,
  PlusIcon,
  Table,
  TrashIcon,
} from 'evergreen-ui'
import useTeachersInfo from '../hooks/useTeachersInfo.ts'
import { Loader } from '../components/Loader.tsx'
import { deleteTeacherById } from '../utils/deleteTeacherById.ts'
import { useCustomNav } from '../hooks/useCustomNav.ts'

export const Teachers = () => {
  const { loading, data, setPage, page, totalPages, fetchTeachers } =
    useTeachersInfo()

  const { navEdit, navCreate } = useCustomNav()

  const handleDelete = async (id: number) => {
    const success = await deleteTeacherById(id)
    if (success) {
      await fetchTeachers()
    }
  }

  return (
    <Pane>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Button marginBottom={16} iconAfter={PlusIcon} onClick={navCreate}>
            New Teacher
          </Button>
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
                  <Table.Row key={item.id} height={100}>
                    <Table.TextCell>{item.id}</Table.TextCell>
                    <Table.TextCell>{item.userName}</Table.TextCell>
                    <Table.TextCell>{item.email}</Table.TextCell>
                    <Table.TextCell>
                      <Pane display={'flex'} flexDirection={'column'}>
                        <Button
                          marginY={8}
                          iconBefore={EditIcon}
                          onClick={() => navEdit(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          marginY={8}
                          iconBefore={TrashIcon}
                          intent="danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </Pane>
                    </Table.TextCell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table.Body>
          <Pagination
            display={'flex'}
            justifyContent={'center'}
            marginTop={16}
            page={page + 1}
            totalPages={totalPages}
            onPreviousPage={() => setPage((prevPage) => prevPage - 1)}
            onNextPage={() => setPage((prevPage) => prevPage + 1)}
            onPageChange={setPage}
          />
        </>
      )}
    </Pane>
  )
}

import {useEffect, useState} from 'react'
import {
  Button,
  CaretDownIcon,
  CogIcon,
  EditIcon, Heading,
  ManualIcon,
  Pagination,
  SearchIcon,
  Table, TextInput,
  TrashIcon
} from 'evergreen-ui';

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/v1/teachers')
      .then(response => response.text())
      .then(result => {
        setData(result);
      });
  }, []);

  console.log(data)

  return (
    <>
      {/* h1 */}
      <h1>h1タイトル</h1>
      {/* h2 */}
      <Heading size={600}>Left Aligned</Heading>
      {/* Table */}
      <Table.Body>
        <Table.Head>
          <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
            Fixed width
          </Table.TextCell>
          <Table.TextCell>Flex me col 2</Table.TextCell>
          <Table.TextCell>Flex me col 3</Table.TextCell>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
              Fixed width
            </Table.TextCell>
            <Table.TextCell>Flex me col 2</Table.TextCell>
            <Table.TextCell>Flex me col 3</Table.TextCell>
          </Table.Row>
        </Table.Body>
      </Table.Body>
      {/* Button */}
      <div>
        <Button marginY={8} marginRight={12} iconAfter={CogIcon}>
          Settings
        </Button>
        <Button marginY={8} marginRight={12} iconBefore={EditIcon}>
          Edit
        </Button>
        <Button marginY={8} marginRight={12} iconBefore={ManualIcon}>
          Docs
        </Button>
        <Button marginY={8} marginRight={12} iconBefore={TrashIcon} intent="danger">
          Delete...
        </Button>
        <Button marginY={8} marginRight={12} iconBefore={SearchIcon}>
          Search
        </Button>
        <Button marginY={8} marginRight={12} iconAfter={CaretDownIcon}>
          Filter
        </Button>
      </div>
      {/* Pagination */}
      <Pagination page={1} totalPages={5}></Pagination>
      {/* Input Field */}
      <TextInput name="text-input-name" placeholder="Text input placeholder..." />
    </>
  )
}

export default App

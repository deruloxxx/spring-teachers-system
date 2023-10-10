import { Table } from 'evergreen-ui';

export const TeachersTable = () => {
  return (
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
  );
};
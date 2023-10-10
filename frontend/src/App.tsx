import {useEffect, useState} from 'react'
import {Alert, Pane} from "evergreen-ui";

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
      <Pane>
        <Alert
          intent="none"
          title="There are over 200 integrations available"
          marginBottom={32}
        />
        <Alert
          intent="success"
          title="Your source is now sending data"
          marginBottom={32}
        />
        <Alert
          intent="warning"
          title="Changes will affect all warehouses"
          marginBottom={32}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed dod eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert intent="danger"
               title="We weren’t able to save your changes"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed dod eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
      </Pane>
    </>
  )
}

export default App

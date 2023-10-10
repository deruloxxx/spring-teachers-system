import {useEffect, useState} from 'react'
import {ButtonList} from "./components/ButtonList.tsx";
import {TeacherPagination} from "./components/TeacherPagination.tsx";
import {TeachersTable} from "./components/TeachersTable.tsx";
import {TeachersHeading} from "./components/TeachersHeading.tsx";
import {TeacherTextInput} from "./components/TeacherTextInput.tsx";

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
      <ButtonList />
      <TeacherPagination />
      <TeachersHeading />
      <TeachersTable />
      <TeacherTextInput />
    </>
  )
}

export default App

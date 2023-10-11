import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Top } from './pages/Top.tsx'
import { Edit } from './pages/Edit.tsx'
import { Create } from './pages/Create.tsx'
import { NoMatch } from './pages/NoMatch.tsx'

function App() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('/api/v1/teachers')
      .then((response) => response.text())
      .then((result) => {
        setData(result)
      })
  }, [])

  console.log(data)

  return (
    <Routes>
      <Route index element={<Top />} />
      <Route path="edit" element={<Edit />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default App

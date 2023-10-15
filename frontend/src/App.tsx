import { Route, Routes } from 'react-router-dom'
import { Top } from './pages/Top.tsx'
import { Edit } from './pages/Edit.tsx'
import { Create } from './pages/Create.tsx'
import { NotFound } from './pages/NotFound.tsx'

const App = () => (
  <Routes>
    <Route index element={<Top />} />
    <Route path="edit" element={<Edit />} />
    <Route path="create" element={<Create />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App

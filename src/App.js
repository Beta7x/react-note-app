import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AddNotePage from "./pages/AddNotePage"
import ArchivePage from "./pages/ArchivePage"
import DetailNotePage from './pages/DetailNotePage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/notes" element={<Navbar />} >
        <Route path=":id" element={<DetailNotePage />} />
        <Route path="new" element={<AddNotePage />} />
      </Route>
      <Route path="/archives" element={<ArchivePage />} />
    </Routes>
  )
}

export default App
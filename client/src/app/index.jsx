// import Loader from "../components/shared/loader"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login"
import Notes from "../pages/notes"
import Main from "../layouts/Main"

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notes" element={<Main/>}>
          <Route index element={<Notes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

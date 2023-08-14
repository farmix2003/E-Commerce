import Navbar from "./components/nav/Navbar"
import { BrowserRouter } from "react-router-dom"
import Rout from "./components/route"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Rout />
      </BrowserRouter>
    </>
  )
}

export default App
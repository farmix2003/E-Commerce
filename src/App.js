import Navbar from "./components/nav/Navbar"
import { BrowserRouter } from "react-router-dom"
import Rout from "./components/route"
import Footer from "./components/Footer/Footer"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
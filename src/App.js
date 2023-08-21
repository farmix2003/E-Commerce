import Navbar from "./components/nav/Navbar"
import { BrowserRouter } from "react-router-dom"
import Rout from "./components/route"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import Productdetails from "./components/ProductDetails"
const App = () => {
  const [detail, setDetail] = useState([])
  const [close, setClose] = useState(false)
  const [product, setProduct] = useState(Productdetails)
  const searchBtn = (product) => {
    const update = Productdetails.filter(x => (
      x.Cat === product
    ))
    setProduct(update)
  }
  const view = (product) => {
    setDetail([{ ...product }])
    setClose(true)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar searchBtn={searchBtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
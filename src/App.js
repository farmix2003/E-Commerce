import Navbar from "./components/nav/Navbar"
import { BrowserRouter } from "react-router-dom"
import Rout from "./components/route"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import Productdetails from "./components/ProductDetails"
const App = () => {
  const [detail, setDetail] = useState([])
  const [cart, setCart] = useState([])
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
  const addToCart = (product) => {
    const exist = cart.find(x => {
      return x.id === product.id;
    })
    if (exist) {
      alert("This product has been already added to cart")
    } else {
      setCart([...cart, { ...product, qyt: 1 }])
      alert("Product has been added to your cart!")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar searchBtn={searchBtn} />
        <Rout addToCart={addToCart} cart={cart} setCart={setCart} product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
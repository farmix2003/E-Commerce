import { Routes, Route } from "react-router-dom"
import Home from "./home/Home"
import Product from "./Product/Product"
import Cart from "./card/Cart"
import Contact from "./contact/Contact"
const Rout = ({ product, setProduct, detail, view, close, setClose, cart, setCart, addToCart }) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} />} />
                <Route path="/product" element={<Product cart={cart} setCart={setCart} addToCart={addToCart} product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} />} />
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default Rout
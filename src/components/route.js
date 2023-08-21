import { Routes, Route } from "react-router-dom"
import Home from "./home/Home"
import Product from "./Product/Product"
const Rout = ({ product, setProduct, detail, view, close, setClose }) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} />} />
                <Route path="/product" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} />} />
            </Routes>
        </>
    )
}

export default Rout
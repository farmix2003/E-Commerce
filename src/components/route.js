import { Routes, Route } from "react-router-dom"
import Home from "./home/Home"
const Rout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default Rout
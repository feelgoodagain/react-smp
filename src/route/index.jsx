import { Routes, Route } from "react-router-dom"
import Home from "../components/Home/Home"
import System from"../components/System/System"
const RouteList = () => {
    return (
        <div>
            < Routes >
                <Route path='/' element={<Home />}></Route>
                <Route path="system" element={<System />}></Route>
            </Routes >
        </div>
    )
}

export default RouteList 
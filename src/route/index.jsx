import { Routes, Route } from "react-router-dom"
import Home from "../components/Home/Home"
import System from "../components/System/System"
import HomeDetail from "../components/Home/detail/HomeDetail"

const RouteList = () => {
    return (
        <div>
            < Routes >
                <Route path='/' element={<Home />}>
                    <Route path="/detail" element={<HomeDetail />}></Route>
                    {/* <Route path="/numberList" element={<NumberList />}></Route> */}
                </Route>
                <Route path="system" element={<System />}></Route>
            </Routes >
        </div>
    )
}

export default RouteList 
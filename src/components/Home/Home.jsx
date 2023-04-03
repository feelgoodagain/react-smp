import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Page from "../Page/Page";
const Home = (props) => {
    const [userInput, setInput] = useState("please input here")
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    // useEffect(() => {
    //     console.log("input change");
    //     const handleInputPass = (e) => {
    //         // console.log("input change");
    //         setInput(e.target.value)
    //     }
    //     document.addEventListener('change', handleInputPass)
    //     return () => {
    //         document.removeEventListener('click', handleInputPass)
    //     }
    // })
    return <div>
        <Page>
            <input id="input" type="text" placeholder={userInput} onChange={handleInput} />
            {/* <HomeDetail input={userInput}></HomeDetail> */}
            <Outlet context={[userInput, setInput]}/>
        </Page>

    </div>
}
export default Home
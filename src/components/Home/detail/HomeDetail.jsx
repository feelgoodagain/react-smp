import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
const HomeDetail = (props) => {
    const [userInput, setInput] = useOutletContext();
    console.log(props);
    return <div>
        <ul>
            <li>name</li>
            <li>age</li>
            <li>gender</li>
            <li>input:{userInput}</li>

        </ul>

    </div>
}
export default HomeDetail
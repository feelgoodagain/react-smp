import React from "react";
import { Link } from "react-router-dom";
const Page = ({children}) => {
    return <div>
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/system">System</Link></li>
        </ul>
        {children}
    </div>
}
export default Page
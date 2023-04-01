import React from "react";
import { Link } from "react-router-dom";
const Page = (props) => {
    return <div>
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/system">System</Link></li>
        </ul>
    </div>
}
export default Page
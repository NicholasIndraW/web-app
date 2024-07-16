import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                <Link to="/">Character List</Link>
                </li>
                <li>
                <Link to="/charloc">Characters Location</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
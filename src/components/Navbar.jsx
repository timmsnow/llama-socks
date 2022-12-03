import React from "react"
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    render() { return (

        <nav className="nav-bar">
            <ul>
                <Link to={"./countries"}>
                    <li>Countries</li>
                </Link>
            </ul>
            <ul>
                <Link to={"./about"}>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    ) 
    }
}

export default NavBar
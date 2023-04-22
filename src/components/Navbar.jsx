import React from "react"
// import { Link } from 'react-router-dom'

// class NavBar extends React.Component {

//     render() { return (

//         <nav className="nav-bar">
//             <ul>
//                 <Link to={"./countries"}>
//                     <li>Countries</li>
//                 </Link>
//             </ul>
//             <ul>
//                 <Link to={"./about"}>
//                     <li>About</li>
//                 </Link>
//             </ul>
//         </nav>
//     ) 
//     }
// }

// export default NavBar
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class BasicNavBar extends React.Component {

    render() { return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Llama Socks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/continents">Continents</Nav.Link>
            {/* <NavDropdown title="Continents" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
    }
}

export default BasicNavBar;
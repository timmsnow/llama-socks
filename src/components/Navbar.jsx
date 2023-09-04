import React from "react"
import { Navbar, Nav } from 'react-bootstrap';

class BasicNavBar extends React.Component {

    render() { return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Llama Socks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/continents">Continents</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
    }
}

export default BasicNavBar;
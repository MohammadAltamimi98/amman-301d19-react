import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <header>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="#home">
                        <span className="txt-color">

                            Pre Eid React Revision
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Homepage</Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default Header;
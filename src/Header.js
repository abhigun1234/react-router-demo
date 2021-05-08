import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import {NavLink, Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavLink className="nav-link" to='/dash' href="#features" activeClassName="active">Dashboard</NavLink>
                        <NavLink className="nav-link" to='/fragment' href="#features" activeClassName="active">Fragment</NavLink>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
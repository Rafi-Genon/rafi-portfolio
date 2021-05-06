import React from 'react';
import { Navbar } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import './NavbarMain.css'
const NavbarMain = () => {
    return (
        <div className="container">
            <Navbar expand="lg">
                <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'black' }} to="/home"><h3 style={{ fontWeight: '800', fontSize: '40px', textDecoration: 'none' }}>Rafi</h3></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Link style={{ textDecoration: 'none', fontSize: '18px', color: 'black', fontWeight: 'bold' }} to="/home" className="mx-3 my-4"><span className="nav-content">Home</span></Link><br />
                    <Link style={{ textDecoration: 'none', fontSize: '18px', color: 'black', fontWeight: 'bold' }} to="/projects" className="mx-3 my-4"><span className="nav-content">Projects</span></Link><br />
                    <Link style={{ textDecoration: 'none', fontSize: '18px', color: 'black', fontWeight: 'bold' }} to="/resume" className="mx-3 my-4"><span className="nav-content"> Resume</span></Link><br />
                    <Link style={{ textDecoration: 'none', fontSize: '18px', color: 'black', fontWeight: 'bold' }} to="/iDo" className="mx-3 my-4"><span className="nav-content">What I Do</span></Link><br />
                    <Link style={{ textDecoration: 'none', fontSize: '18px', color: 'black', fontWeight: 'bold' }} to="/contact" className="mx-3 my-4"><span className="nav-content"> Contact</span></Link><br />
                    <Link style={{ textDecoration: 'none', fontSize: '18px', color: 'black', fontWeight: 'bold' }} to="/blog" className="mx-3 my-4"><span className="nav-content">Blog</span></Link><br />
                    {/* {
                        email && name ? <p style={{ color: 'red', fontWeight: '700' }}>{name}</p>
                            : <Link style={{ textDecoration: 'none' }} to="/logIn"><button className="btn btn-success mx-3">Log in</button></Link>
                    } */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarMain;
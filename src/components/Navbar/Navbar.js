import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import headerGif from "../../img/header-simpsons.gif";

class Navbar extends React.Component {
    render() { 
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light">
                    <img src={headerGif} alt="header-simpson.gif" className="m-1"/>
                    <ul className="navbar-nav d-inline me-auto">
                        <li className="nav-item d-inline mx-2">
                            <Link className="nav-link active d-inline" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item d-inline mx-2">
                            <Link className="nav-link active d-inline" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item d-inline mx-2">
                            <Link className="nav-link active d-inline" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-danger" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        );
    }
}
 
export default Navbar;
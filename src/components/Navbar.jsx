import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { IconName } from "react-icons/ai";
import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Navbar() {
    return (
        <nav className='navbar-container'>
            <div className="navbar-inner">
                <div className="row">
                    <div className="col">
                        <div className="logo_container">
                            <h1>Tu <span className='logo-round'></span></h1>
                        </div>
                    </div>
                    <div className="col">
                        <ul className='menu-link-container'>
                            <li>
                                <Link to={'/'} className='menu-item' >Home</Link>
                            </li>
                            <li>
                                <Link to={'/'} className='menu-item' >Protfolio</Link>
                            </li>
                            <li>
                                <Link to={'/'} className='menu-item'>About</Link>
                            </li>
                            <li>
                                <Link to={'/'} className='menu-item' >Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className='social-media-container'>
                            <li><a href=""><FaFacebook /></a></li>
                            <li><a href=""><FaInstagram /> </a></li>
                            <li><a href=""><FaTwitter /></a></li>
                            <li><a href=""><FaDribbble /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
}

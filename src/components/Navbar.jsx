import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
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
                                <Link to={'/protfolio'} className='menu-item' >Protfolio</Link>
                            </li>
                            <li>
                                <Link to={'/about'} className='menu-item'>About</Link>
                            </li>
                            <li>
                                <Link to={'/'} className='menu-item' >Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className='social-media-container'>
                            <li><a href="https://www.facebook.com/tuminh.vuong.50/"><FaFacebook /></a></li>
                            <li><a href="https://www.instagram.com/dinhtuvtc0376330060/"><FaInstagram /> </a></li>
                            <li><a href=""><FaTwitter /></a></li>
                            <li><a href=""><FaDribbble /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
}

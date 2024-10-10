import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaDribbble, FaFacebook, FaInstagram } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer_inner">
                <div className="row footer_row">
                    <div className="col">
                        <div className="footer_logo_container">
                            <h1>Tu <span className='logo-round'></span> </h1>
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
                            <li><a href="https://www.facebook.com/tuminh.vuong.50/"><FaFacebook /></a></li>
                            <li><a href="https://www.instagram.com/dinhtuvtc0376330060/"><FaInstagram /> </a></li>
                            <li><a href="https://www.facebook.com/tuminh.vuong.50/"><FaTwitter /></a></li>
                            <li><a href="https://www.facebook.com/tuminh.vuong.50/"><FaDribbble /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright_container">
                    <div className="row">
                        <div className="col">
                            <h4>&#169;Copyright Tu. All Rights Reserved</h4>
                        </div>
                        <div className="col">
                            <h4>Design and developer by click to gain </h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer

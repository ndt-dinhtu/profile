import React from 'react'
import { Link } from 'react-router-dom'
import "./ContactMe.css"
import Contact from '../components/Contact'
import { IoMdMail } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
const ContactMe = () => {
    return (
        <div className='contact_section'>
            <div className="section_header">
                <div className="page_header">
                    <h1>Contact Me</h1>
                </div>
                <div className="breadcrumb">
                    <span><Link to={"/"}>Home</Link></span>
                    <span>/</span>
                    <span>Contact</span>
                </div>
            </div>
            <div className="contact_content">
                <Contact />
            </div>
            <div className="contact_info_container">
                <div className="row">
                    <div className="col">
                        <div className="icon_container">
                            <IoMdMail />
                        </div>
                        <div className="content_container">
                            <h3>ndt.290303060703@gmail.com</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon_container">
                            <FaLocationDot />
                        </div>
                        <div className="content_container">
                            <h3>Nguyen Kiem, Go Vap, HCM</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon_container">
                            <FaPhoneAlt />
                        </div>
                        <div className="content_container">
                            <h3>0376330060  </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactMe

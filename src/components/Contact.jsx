import React from 'react'
import "./home/Hero.css"

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="contact-inner">
                <div className="title_container">
                    <h1 className="section_title">Contact</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form_container">
                            <form>
                                <div className="input_container">
                                    <label htmlFor="phone">Phone/Mobile Number</label>
                                    <input type="text" name='phone' className='input' />
                                </div>
                                <div className="input_container">
                                    <label htmlFor="name">Name</label>
                                    <input type="tel" name='name' className='input' />
                                </div>
                                <div className="input_container">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name='email' className='input' />
                                </div>
                                <div className="input_container">
                                    <label htmlFor="message">Message</label>
                                    <textarea name='message' className='input textarea' />
                                </div>
                                <div className="input_container">
                                    <button type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <div className="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.841133765212!2d106.67820697488317!3d10.823466989328127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529519e1684c5%3A0x37d193f79dd9b31a!2zOTA0IMSQLiBOZ3V54buFbiBLaeG7h20sIFBoxrDhu51uZyAzLCBHw7IgVuG6pXAsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1725907308942!5m2!1sen!2s" className='map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='tọa độ'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

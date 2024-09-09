import React, { useState } from 'react'
import "./Testimonials.css"
import anh7 from "../assets/anh7.png"
import anh8 from "../assets/anh8.png"
import anh9 from "../assets/anh9.jpg"
import anh10 from "../assets/anh10.jpg"

const Testimonials = () => {
    const testimonial = [
        {
            image: anh7,
            content: "I strive to learn from the past, but I look toward the future by focusing on the present",
            name: " Donal Trump"
        },
        {
            image: anh8,
            content: "To succeed, we must first believe that we can",
            name: "Nikos Kazantzakis"
        },
        {
            image: anh9,
            content: "Don't wait until tomorrow to do what you can today, because if you enjoy today, you can do it again tomorrow",
            name: "James A.Michener"
        },
        {
            image: anh10,
            content: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
            name: "Colin Powell"
        },
    ]

    const [activeTab, setActiveTab] = useState(0)
    const handleTabClick = (index) => {
        setActiveTab(index)
    }

    return (
        <div>
            <div className='testimonials_container'>
                <div className="testimonials_inner">
                    <div className="title_container">
                        <h1 className='section_title'>Testimonials</h1>

                    </div>

                    <div className="testimonial_content_container">
                        <div className="testimonials_tabs">
                            <div className="testimonials_tab-content">
                                <h1>   ❝ {testimonial[activeTab].content} ❞</h1>
                                <p>-- {testimonial[activeTab].name} --</p>
                            </div>
                            <div className="testimonials_tabs-headers">
                                {testimonial.map((tab, index) => (
                                    <div key={index} className={`testimonials_tab-header ${activeTab === index ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
                                        <div className='img_container'>
                                            <img src={tab.image} alt="tab" />
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Testimonials

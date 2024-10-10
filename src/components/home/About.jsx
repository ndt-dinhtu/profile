import React from 'react'
import anh2 from '../../assets/anh2.jpg'
import './Hero.css'
import Tabs from '../Tabs'
export default function About() {
    const tabsArray = [
        {
            label: 'Main skills',
            content: <div className='mainskills_container'>
                <ul className="skills_list_container">
                    <li className="skills_list">
                        <div className="top_text">UX/UI</div>
                        <div className="bottom_text">As a UX/UI designer,
                            I prioritize user experience by creating intuitive
                            and visually appealing interfaces. I understand the
                            importance of user-centered design, ensuring that products
                            are both functional and aesthetically pleasing. My designs
                            aim to deliver seamless interactions that enhance user satisfaction.</div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">Web Design</div>
                        <div className="bottom_text">In web design, I focus on crafting responsive
                            and modern websites that reflect the brand’s identity. I have a strong
                            grasp of design principles such as layout, color theory, and typography,
                            ensuring that every website I build is both functional and visually engaging.
                            I work closely with clients to turn their vision into a reality.</div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">Web Developer</div>
                        <div className="bottom_text">As a web developer, I specialize in building
                            efficient and scalable web applications using modern frameworks.
                            I have expertise in both front-end and back-end development, ensuring
                            seamless integration and smooth functionality. I am dedicated to writing
                            clean, maintainable code that delivers high performance and enhances user experience.</div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">Software Testing</div>
                        <div className="bottom_text">In software testing, I ensure the quality and reliability
                            of applications through rigorous testing processes. I am proficient in manual and
                            automated testing techniques, identifying bugs and ensuring that software meets all
                            requirements. My goal is to deliver stable and error-free products, improving overall user satisfaction</div>
                    </li>
                </ul>

            </div>
        },
        {
            label: 'Awards',
            content: <div className='awards_container'>
                <ul className="awards_list_container">
                    <li className="awards_list">
                        <div className="top_text">Java Full Stack</div>
                        <div className="bottom_text">Completed the Java Full Stack certification provided by KITS Korea IT School</div>
                    </li>
                </ul>

            </div>
        },
        {
            label: 'Experience',
            content: <div className='mainskills_container'>
                <ul className="skills_list_container">
                    <li className="skills_list">
                        <div className="top_text">NodeJS</div>
                        <div className="bottom_text">NodeJS is a server-side JavaScript
                            runtime that allows for building high-performance web applications
                            capable of handling multiple requests simultaneously. It's commonly
                            used for real-time applications and APIs.</div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">Java Spring boot</div>
                        <div className="bottom_text">Spring Boot is a Java framework
                            that simplifies the development of web applications and microservices.
                            It provides features like auto-configuration, easy creation of REST APIs,
                            and seamless integration with other technologies.</div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">ReactJS</div>
                        <div className="bottom_text">ReactJS is a popular JavaScript library
                            for building user interfaces. It allows developers to create reusable UI
                            components and optimize performance by re-rendering only necessary parts of the page.</div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">ExpressJS</div>
                        <div className="bottom_text">ExpressJS is a lightweight framework
                            running on NodeJS, used for building APIs and web applications quickly.
                            It provides flexible tools for managing routing, middleware, and handling HTTP requests.</div>
                    </li>
                </ul>

            </div>
        }
    ]
    return (
        <div className="about-container">
            <div className="about-inner">
                <div className="row">
                    <div className="col">
                        <div className="img_container">
                            <img src={anh2} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <h1 className='section_title'>About me</h1>
                        <p className="about_content">Currently, I am a final-year student</p>
                        <p className='about_content'>With the experience and knowledge I have accumulated, I continuously learn to improve myself and create valuable products</p>
                        <p className='about_content'>Explore the projects I have worked on and learn more about my journey in the tech field.</p>
                        <p className='about_content'>My goal is to become a professional web developer and contribute to innovative projects in the future."</p>

                        <div className="tab_section">
                            <Tabs tabs={tabsArray} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

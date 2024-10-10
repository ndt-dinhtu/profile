import React from 'react'
import './Hero.css'
import anh1 from '../../assets/anh1.jpg'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
export default function Hero() {
    const { ref: clientRef, inView: clientsInView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    const { ref: projectsRef, inView: projectsInView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    const { ref: experienceRef, inView: experienceInView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    return (
        <div className='hero-container'>
            <div className="hero-inner">
                <div className="top-container">
                    <h1>Hello, I am Tu, A <span className='highlight'>Software Web Developer</span> </h1>
                </div>
                <div className="bottom-container">
                    <div className="col">
                        <div className="text-container">
                            <h3>A little about myself.</h3>
                            <p>Hello everyone, I am Nguyen Dinh Tu.
                                I am currently a final-year student at
                                GiaDinh University, majoring in Software
                                Engineering. With a passion for programming,
                                I continuously strive to learn and improve
                                myself to create products and websites that
                                meet market demands. My dream is to become
                                a professional web developer.</p>
                        </div>
                        <div className="text-container">
                            <h3>Contact</h3>
                            <ul>
                                <li>
                                    <FaLocationDot /> Nguyen Kiem, Go Vap, HCM
                                </li>
                                <li>
                                    <SiGmail />  ndt.290303060703@gmail.com
                                </li>
                                <li>
                                    <FaPhoneAlt />  +84 376 330 060
                                </li>
                                <li>
                                    <FaGithub /> <a href="https://github.com/ndt-dinhtu/">https://github.com/ndt-dinhtu/</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-container">
                            <h3>Service</h3>
                            <ul>
                                <li>
                                    Web design
                                </li>
                                <li>
                                    Software Testing
                                </li>
                                <li>
                                    Software Developer
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="hero_img_section">
                            <div className="img_container">
                                <img src={anh1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="counter_container">
                            <div className="counter_item" >
                                <h3>Experience</h3>
                                <h1 ref={experienceRef}>
                                    {experienceInView && <CountUp start={0} end={2} />}+
                                </h1>
                            </div>
                            <div className="counter_item" >
                                <h3>Task</h3>
                                <h1 ref={clientRef}>
                                    {clientsInView && <CountUp start={0} end={50} />}+
                                </h1>
                            </div>
                            <div className="counter_item">
                                <h3>Products</h3>
                                <h1 ref={projectsRef}>
                                    {projectsInView && <CountUp start={0} end={10} />}+
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

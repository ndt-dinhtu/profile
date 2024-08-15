import React from 'react'
import './Hero.css'
import anh1 from '../../assets/anh1.jpg'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

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
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda voluptatum ipsa blanditiis vitae nam ex laboriosam, ratione ipsum recusandae.</p>
                        </div>
                        <div className="text-container">
                            <h3>Contact</h3>
                            <ul>
                                <li>
                                    Nguyen Kiem, Go Vap, HCM
                                </li>
                                <li>
                                    ndt.290303060703@gmail.com
                                </li>
                                <li>
                                    +84 376 330 060
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
                                    {experienceInView && <CountUp start={0} end={5} />}+
                                </h1>
                            </div>
                            <div className="counter_item" >
                                <h3>Experience</h3>
                                <h1 ref={clientRef}>
                                    {clientsInView && <CountUp start={0} end={10} />}+
                                </h1>
                            </div>
                            <div className="counter_item">
                                <h3>Products</h3>
                                <h1 ref={projectsRef}>
                                    {projectsInView && <CountUp start={0} end={30} />}+
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

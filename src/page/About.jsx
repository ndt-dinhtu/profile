import React from 'react'
import { Link } from 'react-router-dom'
import anh2 from "../assets/anh2.jpg"
import "./About.css"
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
import SkillsCard from '../components/protfolio/SkillsCard'
const About = () => {
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
        <div className='portfolio_section'>
            <div className="section_header">
                <div className="page_header">
                    <h1>About Me</h1>
                </div>
                <div className="breadcrumb">
                    <span><Link to={"/"}>Home</Link></span>
                    <span>/</span>
                    <span>About</span>
                </div>
            </div>
            <div className="about_inner">
                <div className="section_container">
                    <div className="row">
                        <div className="col">
                            <div className="img_container">
                                <img src={anh2} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <h1 className='section_title'>About me</h1>
                            <p className="about_content">Currently, I am a final-year student</p>
                            <p className='about_content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat necessitatibus delectus commodi ipsa, odio sit recusandae dolore perspiciatis minima! Similique, necessitatibus nostrum. Id repudiandae architecto soluta quisquam alias eligendi explicabo.
                                Cupiditate omnis nisi voluptatibus autem doloremque, ad ipsa voluptatem! Labore iure culpa eligendi quae amet magni, voluptas voluptates excepturi porro dolores eos aliquid tenetur, sapiente quasi velit enim! Saepe, magnam.</p>
                            <p className='about_content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat necessitatibus delectus commodi ipsa, odio sit recusandae dolore perspiciatis minima! Similique, necessitatibus nostrum. Id repudiandae architecto soluta quisquam alias eligendi explicabo.
                                Cupiditate omnis nisi voluptatibus autem doloremque, ad ipsa voluptatem! Labore iure culpa eligendi quae amet magni, voluptas voluptates excepturi porro dolores eos aliquid tenetur, sapiente quasi velit enim! Saepe, magnam.</p>
                            <p className="about_content">Currently, I am a final-year student</p>
                            <p className='about_content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat necessitatibus delectus commodi ipsa, odio sit recusandae dolore perspiciatis minima! Similique, necessitatibus nostrum. Id repudiandae architecto soluta quisquam alias eligendi explicabo.
                                Cupiditate omnis nisi voluptatibus autem doloremque, ad ipsa voluptatem! Labore iure culpa eligendi quae amet magni, voluptas voluptates excepturi porro dolores eos aliquid tenetur, sapiente quasi velit enim! Saepe, magnam.</p>
                            <p className='about_content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat necessitatibus delectus commodi ipsa, odio sit recusandae dolore perspiciatis minima! Similique, necessitatibus nostrum. Id repudiandae architecto soluta quisquam alias eligendi explicabo.
                                Cupiditate omnis nisi voluptatibus autem doloremque, ad ipsa voluptatem! Labore iure culpa eligendi quae amet magni, voluptas voluptates excepturi porro dolores eos aliquid tenetur, sapiente quasi velit enim! Saepe, magnam.</p>
                            <p className="about_content">Currently, I am a final-year student</p>
                            <p className='about_content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat necessitatibus delectus commodi ipsa, odio sit recusandae dolore perspiciatis minima! Similique, necessitatibus nostrum. Id repudiandae architecto soluta quisquam alias eligendi explicabo.
                                Cupiditate omnis nisi voluptatibus autem doloremque, ad ipsa voluptatem! Labore iure culpa eligendi quae amet magni, voluptas voluptates excepturi porro dolores eos aliquid tenetur, sapiente quasi velit enim! Saepe, magnam.</p>
                            <p className='about_content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat necessitatibus delectus commodi ipsa, odio sit recusandae dolore perspiciatis minima! Similique, necessitatibus nostrum. Id repudiandae architecto soluta quisquam alias eligendi explicabo.
                                Cupiditate omnis nisi voluptatibus autem doloremque, ad ipsa voluptatem! Labore iure culpa eligendi quae amet magni, voluptas voluptates excepturi porro dolores eos aliquid tenetur, sapiente quasi velit enim! Saepe, magnam.</p>
                            {/* <div className="tab_section">
                                <Tabs tabs={tabsArray} />
                            </div> */}

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
                <div className="about_skills_section">
                    <SkillsCard />
                </div>
            </div>
        </div>
    )
}

export default About

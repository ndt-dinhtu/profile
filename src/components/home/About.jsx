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
                        <div className="bottom_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, cum?</div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">Web Design</div>
                        <div className="bottom_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, cum?</div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">Web Developer</div>
                        <div className="bottom_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, cum?</div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">Software Testing</div>
                        <div className="bottom_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, cum?</div>
                    </li>
                </ul>

            </div>
        },
        {
            label: 'Awards',
            content: <div className='awards_container'>
                <ul className="awards_list_container">
                    <li className="awards_list">
                        <div className="top_text"></div>
                        <div className="bottom_text"></div>
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
                        <div className="bottom_text"></div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">Web Design</div>
                        <div className="bottom_text"></div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">Web Developer</div>
                        <div className="bottom_text"></div>
                    </li>
                    <li className="skills_list">
                        <div className="top_text">Software Testing</div>
                        <div className="bottom_text"></div>
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
                        <p className='about_content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat necessitatibus delectus commodi ipsa, odio sit recusandae dolore perspiciatis minima! Similique, necessitatibus nostrum. Id repudiandae architecto soluta quisquam alias eligendi explicabo.
                            Cupiditate omnis nisi voluptatibus autem doloremque, ad ipsa voluptatem! Labore iure culpa eligendi quae amet magni, voluptas voluptates excepturi porro dolores eos aliquid tenetur, sapiente quasi velit enim! Saepe, magnam.</p>
                        <p className='about_content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat necessitatibus delectus commodi ipsa, odio sit recusandae dolore perspiciatis minima! Similique, necessitatibus nostrum. Id repudiandae architecto soluta quisquam alias eligendi explicabo.
                            Cupiditate omnis nisi voluptatibus autem doloremque, ad ipsa voluptatem! Labore iure culpa eligendi quae amet magni, voluptas voluptates excepturi porro dolores eos aliquid tenetur, sapiente quasi velit enim! Saepe, magnam.</p>
                        <div className="tab_section">
                            <Tabs tabs={tabsArray} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

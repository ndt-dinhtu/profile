import React from 'react'
import anh2 from '../../assets/anh2.jpg'
import './Hero.css'
import Tabs from '../Tabs'
export default function About() {
    const tabsArray = [
        {
            label: 'Main skills',
            content: <div>hihi</div>
        },
        {
            label: 'Awards',
            content: <div>a</div>
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

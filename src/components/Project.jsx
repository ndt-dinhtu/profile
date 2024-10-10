import React from 'react'

import anh3 from '../assets/anh3.jpg'
import anh4 from '../assets/anh4.jpg'
import anh5 from '../assets/anh5.jpg'
import anh6 from '../assets/anh6.jpg'
import ProjectCard from './ProjectCard'


export default function Project() {
    const projects = [
        {
            image: anh3,
            title: 'Project 1',
            content: 'Backend for building a clothing e-commerce website for a fashion shop',
            url: 'https://github.com/ndt-dinhtu/backen_springboot',
        },
        {
            image: anh4,
            title: 'Project 2',
            content: 'Frontend for building a clothing e-commerce website for a fashion shop',
            url: 'https://github.com/ndt-dinhtu/front_end_springboot',
        },
        {
            image: anh5,
            title: 'Project 3',
            content: 'Templace basic',
            url: 'https://web-pioted.vercel.app/',
        },
        {
            image: anh6,
            title: 'Project 4',
            content: 'Frontend website  ',
            url: 'https://github.com/ndt-dinhtu/webfrontend',
        },
    ]
    return (
        <div className="projects-container">
            <div className="title_container">
                <h1 className='section_title'>My Project</h1>
            </div>
            <div className="projects-content-container">
                {projects.map((project, index) => (
                    <div key={index} className="project_content_card">
                        <ProjectCard data={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

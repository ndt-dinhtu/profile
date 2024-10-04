import React from 'react'
import anh3 from '../../assets/anh3.jpg'
import anh4 from '../../assets/anh4.jpg'
import anh5 from '../../assets/anh5.jpg'
import anh6 from '../../assets/anh6.jpg'
import ProjectCard from '../ProjectCard'


const ProtfolioProducts = () => {
    const projects = [
        {
            image: anh3,
            title: 'Project 1',
            content: 'lorem',
            url: '',
        },
        {
            image: anh4,
            title: 'Project 2',
            content: 'lorem',
            url: '',
        },
        {
            image: anh5,
            title: 'Project 3',
            content: 'lorem',
            url: '',
        },
        {
            image: anh6,
            title: 'Project 4',
            content: 'lorem',
            url: '',
        },
        {
            image: anh5,
            title: 'Project 3',
            content: 'lorem',
            url: '',
        },
        {
            image: anh6,
            title: 'Project 4',
            content: 'lorem',
            url: '',
        },
    ]
    return (
        <div className="projects-container">
            <div className="projects-inner">

                <div className="projects-content-container">
                    {projects.map((project, index) => (
                        <div key={index} className="project_content_card">
                            <ProjectCard data={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProtfolioProducts

import React from 'react'
import './ProjectCard.css'

export default function ProjectCard({ data }) {
    return (
        <div className="projectcard_container">
            <div className="projectcard_inner">
                <div className="img_container">
                    <img src={data.image} alt={data.title} />
                </div>
                <div className="text_container">
                    <h1 className="project_title">
                        {data.title}
                    </h1>
                    <p>
                        {data.content}
                    </p>
                    <a href={data.url}>
                        <button className='knowbtn'>Know More</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

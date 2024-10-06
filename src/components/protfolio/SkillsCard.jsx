import React from 'react'

const SkillsCard = () => {
    const skills = [
        {
            name: "UI/UX",
            content: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eum veritatis. Quae ipsa, voluptates esse facere quod et quam provident laboriosam! Distinctio enim quibusdam dolore ut earum repellendus, veritatis dicta!"
        },
        {
            name: "Web Design",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eum veritatis. Quae ipsa, voluptates esse facere quod et quam provident laboriosam! Distinctio enim quibusdam dolore ut earum repellendus, veritatis dicta!"
        },
        {
            name: "Software Development",
            content: "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eum veritatis. Quae ipsa, voluptates esse facere quod et quam provident laboriosam! Distinctio enim quibusdam dolore ut earum repellendus, veritatis dicta!"
        },
        {
            name: "Software Testing ",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eum veritatis. Quae ipsa, voluptates esse facere quod et quam provident laboriosam! Distinctio enim quibusdam dolore ut earum repellendus, veritatis dicta!"
        }
    ]
    return (
        <div className='skills_container'>
            {skills.map((skill, index) => (
                <div className="skills_card" key={index}>
                    <div className="text_container">
                        <h1>{skill.name}</h1>
                        <p>{skill.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsCard

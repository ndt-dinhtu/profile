import React from 'react'

const Awards = () => {
    const awards = [
        {
            name: "JavaFullStack-Green Academy",
            year: "2024"
        },
        {
            name: "asd sad sda d",
            year: "2020-2021"
        },


    ]
    return (
        <div className='awards_container'>
            {awards.map((skill, index) => (
                <div className="awards_card" key={index}>
                    <div className="text_container">
                        <h1>{skill.name}</h1>
                        <p>{skill.year}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Awards

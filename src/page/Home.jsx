import React from 'react'
import './Home.css'
import Hero from '../components/home/Hero'
import About from '../components/home/About'

export default function Home() {
    return (
        <div className='home-container'>
            <Hero />
            <About />
        </div>
    )
}

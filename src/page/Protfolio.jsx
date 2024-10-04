import React from 'react'
import { Link } from 'react-router-dom'
import "./Protfolio.css"
import ProtfolioProducts from '../components/protfolio/ProtfolioProducts'
const Protfolio = () => {
    return (
        <div className='portfolio_section'>
            <div className="section_header">
                <div className="page_header">
                    <h1>My Protfolio</h1>
                </div>
                <div className="breadcrumb">
                    <span><Link to={"/"}>Home</Link></span>
                    <span>/</span>
                    <span>Portfolio</span>
                </div>
            </div>
            <div className="protfolio_inner">
                <div className="section_container">
                    <ProtfolioProducts />
                </div>
            </div>
        </div>
    )
}

export default Protfolio

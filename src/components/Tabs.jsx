import React, { useState } from 'react'
import './Tabs.css'

export default function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0)
    const handleTabClick = (index) => {
        setActiveTab(index)
    }
    return (
        <div className="tabs">
            <div className="tabs-headers">
                {tabs.map((tab, index) => (
                    <div key={index} className={`tab-header ${activeTab === index ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
                        {tab.label}
                    </div>
                ))}
                <div className="tab-content">
                    {tabs[activeTab].content}
                </div>
            </div>
        </div>
    )
}

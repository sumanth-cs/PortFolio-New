import React from 'react'
import "./Cards.css"

export default function Cards({ logo, color }) {
    return (
        <div className="cards"
            style={{ filter: `drop-shadow(0 0 3rem ${color})` }}>
            <img src={logo} alt="" />
        </div>
    )
}

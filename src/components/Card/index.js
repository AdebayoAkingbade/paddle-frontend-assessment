import React from 'react'

const Card = ({ number, title }) => {
    return (
        <div className="card">
            <div className="number">{number}</div>
            <p>{title}</p>
        </div>
    )
}

export default Card
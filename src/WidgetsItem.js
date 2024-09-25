import React from 'react'
import './WidgetsItem.css'

function WidgetsItem({ name, description, imageUrl }) {
  return (
    <div className="feedItem">
      <img src={imageUrl} alt={name} className="feedItem__image" />
      <div className="feedItem__info">
        <h4>{name}</h4>
        <p>{description}</p>
        <button className="feedItem__followBtn">+ Follow</button>
      </div>
    </div>
  )
}

export default WidgetsItem
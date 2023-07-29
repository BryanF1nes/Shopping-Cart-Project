import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({imageUrl, name, description, price}) => {
  return (
    <div className="card-container" >
        <img src={imageUrl} alt=""/>
        <div className="item-info">
            <h1>{name}</h1>
            <h3>${price}</h3>
            <p>{description}</p>
            <button onClick={() => console.log('button')}>Add to cart</button>
        </div>
    </div>
  )
}

export default Card
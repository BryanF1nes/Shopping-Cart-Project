import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({imageUrl, name, description, price, id}) => {
  return (
    <div className="card-container" id={id}>
        <img src={imageUrl} alt=""/>
        <div className="item-info">
            <h1>{name}</h1>
            <h3>${price}</h3>
            <p>{description}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Card
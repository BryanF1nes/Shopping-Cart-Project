import React from 'react'
import Card from './Card'
import storedata from '../data'

const Shop = () => {

  const renderItems = () => {
    return storedata.map((items) => {
      return (
        <Card key={items.id}
        id={items.id}
        type={items.type}
        imageUrl={items.imageUrl}
        name={items.name}
        description={items.description}
        price={items.price}
        />
      )
    })
  }

  const handleFilter = (e) => {
    // if selected filter matches the item type
    // loop over the data and only display the items that contain that type
  }

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Shop!</h1>
        <div>
          <label htmlFor="Category">Filter:</label>
          <select id="Category" name="Category">
            <option value="all">All</option>
            <option value="squeakyToy">Squeaky Toy</option>
            <option value="leash">Leash</option>
            <option value="collar">Collar</option>
            <option value="food">Dog food</option>
          </select>
        </div>
      </div>
      <div className="shop-grid">
      {renderItems()}
      </div>
    </div>
  )
}

export default Shop
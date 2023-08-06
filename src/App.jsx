import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Card from './components/Shop/components/Card'
import { FaPaw, FaShoppingBag } from 'react-icons/fa';
import storedata from './data';
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])

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
        addCart={() => setCart([...cart, items.id])}
        />
      )
    })
  }

  const classRender = () => {
    if (cart.length === 0) {
      null;
    } else if (cart.length <= 9) {
      return <span className="cart-low">{cart.length}</span>
    } else {
      return <span className="cart-container">{cart.length}</span>
    }
  }

  console.log(cart)

  return (
    <div>
      <nav className="navbar">
        <Link to="/" id="logo"><FaPaw className="paw" />Zoomies</Link>
        <ul className="link-items">
          <Link to="/">Home</Link>
          <Link to="/shop" >Shop</Link>
          <Link to="/cart"><FaShoppingBag className="shopping-bag"/>{classRender()}</Link>
        </ul>
      </nav>
      <Outlet context={[renderItems(), cart]}/>
    </div>
  )
}

export default App

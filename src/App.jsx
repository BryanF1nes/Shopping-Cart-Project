import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import storeData from './data';
import { useEffect, useState } from 'react';

function App() {
  // const [data, setData] = useState(storeData)

  // useEffect(() => {
  //   setTimeout(() => {

  //   }, 2000)
  // })

  return (
    <div>
      <nav className="navbar">
        <Link to="/" id="logo"><FaPaw className="paw" />Zoomies</Link>
        <ul className="link-items">
          <Link to="/">Home</Link>
          <Link to="/shop" storedata={storeData}>Shop</Link>
          <Link to="/cart">Cart</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default App

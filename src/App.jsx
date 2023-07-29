import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';

function App() {

  return (
    <div className="BODY">
      <nav className="navbar">
        <Link to="/" id="logo"><FaPaw className="paw" />Zoomies</Link>
        <ul className="link-items">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default App

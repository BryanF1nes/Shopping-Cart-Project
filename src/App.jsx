import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="BODY">
      <nav className="navbar">
        <Link to="/" id="logo">Bomb-Diggity</Link>
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

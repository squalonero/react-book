import { Link } from 'react-router-dom'
/**
 *
 * React Router
 * 1. import BrowserRouter at application top-level and wrap everything inside
 * 2. import { Route, Routes } ususally in app.js. Here is where we display the content
 *      of each route and specify the corresponding component to render
 * 3. import Link in order to create navigation links pointing to our routes
 */

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>FatBook</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/promise">Promise</Link>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  )
}

export default Navbar

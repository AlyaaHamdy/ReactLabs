import React from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function NavBar() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/product">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/favourites">Favourites</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default NavBar
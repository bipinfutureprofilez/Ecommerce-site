import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
          <header className="header-one">
              <div className="container">
                  <nav className="navbar navbar-expand-lg">
                      <Link to="/" id="" className="brand_logo"><span id="header1_logo_txt">Logo</span>
                          <img src="" alt="" id="headder1_logo" style={{ display: 'none' }} />
                      </Link>
                      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="toggle-line my-1"></span>
                          <span className="toggle-line my-1"></span>
                          <span className="toggle-line my-1"></span>
                      </button>
                      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <Link className="nav-link" to='/'>Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to='/shop'>Shop</Link>                                  
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to='/about'>About</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to='/contact'>Contact</Link>
                              </li>
                          </ul>
                      </div>
                      <div className="header_right">
                          <Link to="/register" className="border-theme-btn">Register</Link>
                          <Link to="/login" className="bg-theme-btn">Login</Link>
                      </div>
                  </nav>
              </div>
          </header>
    </>
  )
}

export default Navbar;
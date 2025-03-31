import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
        <h1 className="logo-text">✌😎</h1>
        <nav>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
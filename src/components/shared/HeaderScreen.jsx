import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/headerScreen.css'
import { FaBuffer, FaUserAlt, FaStore, FaShoppingCart } from 'react-icons/fa'

const HeaderScreen = () => {

  const navbar = useRef()

  const clickMenuHam = ()=>{
    navbar.current.classList.toggle('navbar-open')
  }

  return (
    <header>
      <h1 className="header__title">
        <Link to='/'>
          <b>
          e-<span>comm</span>
          <span>e</span>rce
        </b>
        </Link>
      </h1>
      <FaBuffer onClick={clickMenuHam} className="header__menuham"/>
      <nav ref={navbar} className="navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <NavLink to="/login" className={({isActive}) => isActive ? "navbar__link-active navbar__links" : "navbar__links"}>
              <i className='icon-navbar'><FaUserAlt /></i>
            </NavLink>
            <p>login</p>
          </li>
          <li className="navbar__items">
            <NavLink to="/purchases" className={({isActive}) => isActive ? "navbar__link-active navbar__links" : "navbar__links"}>
              <i className='icon-navbar'><FaStore /></i>
            </NavLink>
            <p>purchases</p>
          </li>
          <li className="navbar__items">
            <NavLink to="/cart" className={({isActive}) => isActive ? "navbar__link-active navbar__links" : "navbar__links"}>
              <i className='icon-navbar'><FaShoppingCart/></i>
            </NavLink>
            <p>cart</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderScreen
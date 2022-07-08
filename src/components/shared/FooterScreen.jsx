import React from 'react'
import { Link } from 'react-router-dom'
import './styles/footerScreen.css'

const FooterScreen = () => {
  return (
    <footer className='footer-screen'>
      <h2 className="footer__link">
        <Link to='/'>
          <b>
          gith<span>ub</span> <span>l</span>ink
        </b>
        </Link>
      </h2>
    </footer>
  )
}

export default FooterScreen
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id='header' className='d-flex align-items-center '>
      <div className='container-fluid container-xxl d-flex align-items-center'>
        <div id='logo' className='me-auto'>
          <Link to='/' className='scrollto'>
            <img src='assets/img/logo.png' alt='title' />
          </Link>
        </div>
        <nav id='navbar' className='navbar order-last order-lg-0'>
          <ul>
            <li>
              <Link className='nav-link scrollto active' to='#hero'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#about'>
                About
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#speakers'>
                Speakers
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#schedule'>
                Schedule
              </Link>
            </li>

            <li>
              <Link className='nav-link scrollto' to='#hotels'>
                Hotels
              </Link>
            </li>

            <li>
              <Link className='nav-link scrollto' to='#supporters'>
                Sponsors
              </Link>
            </li>

            <li>
              <Link className='nav-link scrollto' to='#contact'>
                Contact
              </Link>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle' />
        </nav>
        {/* .navbar */}
        <Link className='buy-tickets scrollto' to='#buy-tickets'>
          Buy Tickets
        </Link>
      </div>
    </header>
  )
}

export default Header

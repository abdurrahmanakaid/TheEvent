import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 footer-info'>
              <img src='assets/img/logo.png' alt='TheEvenet' />
              <p>
                In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit
                molestiae recusandae possimus. Aut consectetur id quis. In inventore consequatur ad voluptate cupiditate debitis accusamus repellat
                cumque.
              </p>
            </div>
            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className='bi bi-chevron-right' /> <Link to='#'>Home</Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right' /> <Link to='#'>About us</Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right' /> <Link to='#'>Services</Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right' /> <Link to='#'>Terms of service</Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right' /> <Link to='#'>Privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className='bi bi-chevron-right' /> <Link to='#'>Home</Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right' /> <Link to='#'>About us</Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right' /> <Link to='#'>Services</Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right' /> <Link to='#'>Terms of service</Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right' /> <Link to='#'>Privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 footer-contact'>
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
              <div className='social-links'>
                <Link to='#' className='twitter'>
                  <i className='bi bi-twitter' />
                </Link>
                <Link to='#' className='facebook'>
                  <i className='bi bi-facebook' />
                </Link>
                <Link to='#' className='instagram'>
                  <i className='bi bi-instagram' />
                </Link>
                <Link to='#' className='google-plus'>
                  <i className='bi bi-instagram' />
                </Link>
                <Link to='#' className='linkedin'>
                  <i className='bi bi-linkedin' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='copyright'>
          © Copyright <strong>TheEvent</strong>. All Rights Reserved
        </div>
        <div className='credits'>
          Designed by <a href='https://akaid.herokuapp.com'>BootstrapMade</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

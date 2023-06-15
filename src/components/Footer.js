import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Revolution
            </p>
            <p className="footer-subscription-text">
                Subscribe Below
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email"
                    className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='https://z1ppmystic.github.io/'>Check out my Website</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                        IntelliVault <i className='fas fa-lock' />
                    </Link>
                    <small className="website-rights">IntelliVault (c) 2023</small>
                    <div className="social-icons">
                        <Link className="social-icon-link"
                        to='/'
                        target='_blank'
                        aria-label='GitHub'>
                            <i className="fab fa-github"></i>
                        </Link>
                        <Link className="social-icon-link"
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'>
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <h3>Made with ❤️ by Misho Metodiev</h3>
    </div>
  )
}

export default Footer
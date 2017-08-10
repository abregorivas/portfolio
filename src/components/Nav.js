import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <img src='src/images/logo-red.png' alt='site-logo' />
        </div>
        <div className='top-bar-right'>
          <ul className='breadcrumbs align-center'>
            <li className='is-active'><a>Home</a></li>
            <li><a>Apps</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar

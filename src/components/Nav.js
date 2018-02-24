import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <img src='src/images/logo-test1.png' alt='site-logo' />
        </div>
        <div className='top-bar-right'>
          <ul className='menu align-center'>
            <li><NavLink to='./'>Home</NavLink></li>
            <li><NavLink to='./Games'>Apps</NavLink></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar

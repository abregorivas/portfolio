import React, { Component } from 'react'
import Navbar from './Nav'
import Lead from './Lead'

class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Lead />
        <p> Hello World!</p>
      </div>
    )
  }
}

export default Home

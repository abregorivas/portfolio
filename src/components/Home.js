import React, { Component } from 'react'
import Navbar from './Nav'
import Lead from './Lead'
import Services from './Services'
import Gallery from './Gallery'

class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Lead />
        <Services />
        <Gallery />
      </div>
    )
  }
}

export default Home

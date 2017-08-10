import React, { Component } from 'react'
import Navbar from './Nav'
import Lead from './Lead'
import Services from './Services'
import Gallery from './Gallery'
import About from './About'
class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Lead />
        <Services />
        <About />
        <Gallery />
      </div>
    )
  }
}

export default Home

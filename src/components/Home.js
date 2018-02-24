import React, { Component } from 'react'
import Navbar from './Nav'
import Lead from './Lead'
import Services from './Services'
import Gallery from './Gallery'
import About from './About'
import Footer from './Footer'

class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Lead />
        <Services />
        <About />
        <Gallery />
        <Footer />
      </div>
    )
  }
}

export default Home

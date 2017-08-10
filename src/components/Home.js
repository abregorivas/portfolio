import React, { Component } from 'react'
import Navbar from './Nav'
import Lead from './Lead'
import Card from './Card'
import Gallery from './Gallery'

class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Lead />
        <Card />
        <Gallery />
      </div>
    )
  }
}

export default Home

import React, { Component } from 'react'
import Card from './Card'

class Services extends Component {
  render () {
    return (
      <div className='row small-up-2 medium-up-3'>
        <Card title='Design' imgSrc='src/images/design128.png' imgAlt='Design Logo' />
        <Card title='Design' imgSrc='src/images/develop128.png' imgAlt='Design Logo' />
        <Card title='Design' imgSrc='src/images/launch128.png' imgAlt='Design Logo' />
      </div>
    )
  }
}

export default Services

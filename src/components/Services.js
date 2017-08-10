import React, { Component } from 'react'
import Card from './Card'

class Services extends Component {
  render () {
    const message = {
      design: "It's important to plan but don't over do it. ",
      development: 'The joy is in the journey not the destination.',
      launch: 'Your baby eventually grows up.'
    }

    return (
      <div className='row small-up-2 medium-up-3'>
        <Card title='Design' imgSrc='src/images/design128.png' imgAlt='Design Logo' message={message.design} />
        <Card title='Develop' imgSrc='src/images/develop128.png' imgAlt='Design Logo' message={message.development} />
        <Card title='Launch' imgSrc='src/images/launch128.png' imgAlt='Design Logo' message={message.launch} />
      </div>
    )
  }
}

export default Services

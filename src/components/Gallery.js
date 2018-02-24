import React, { Component } from 'react'
import Card from './Card'

class Gallery extends Component {
  render () {
    return (
      <div className='row expanded small-up-2 medium-up-4'>
        <Card title='BattleShip' imgSrc='src/images/design0.png' />
        <Card title='Simon' imgSrc='src/images/design0.png' />
        <Card title='Memory' imgSrc='src/images/design0.png' />
        <Card title='Pomodoro' imgSrc='src/images/design0.png' />
        <Card title='Tribute' imgSrc='src/images/design0.png' />
        <Card title='Pomodoro' imgSrc='src/images/design0.png' />
        <Card title='Pomodoro' imgSrc='src/images/design0.png' />
        <Card title='Pomodoro' imgSrc='src/images/design0.png' />
      </div>
    )
  }
}

export default Gallery

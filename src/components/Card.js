import React, { Component } from 'react'

class Card extends Component {
  render () {
    return (
      <div className='row small-up-2 medium-up-3'>
        <div className='column flex-container'>
          <div className='card'>
            <div className='card-divider'>
              <h3> Design </h3>
            </div>
            <div className='card-section'>
              <img src='src/images/design0.png' alt='' />
              <h4>Design</h4>
            </div>
          </div>
        </div>
        <div className='column flex-container'>
          <div className='card'>
            <div className='card-divider'>
              <h3> Develop </h3>
            </div>
            <div className='card-section'>
              <img src='src/images/develop.png' alt='' />
            </div>
          </div>
        </div>
        <div className='column flex-container'>
          <div className='card'>
            <div className='card-divider'>
              <h3> Launch </h3>
            </div>
            <div className='card-section'>
              <img src='src/images/launch.png' alt='' />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Card

import React, { Component } from 'react'

class Gallery extends Component {
  render () {
    return (
      <div className='row expanded small-up-2 medium-up-4'>
        <div className='column flex-container'>
          <div className='card'>
            <div className='card-section'>
              <img src='src/images/design0.png' alt='' />
            </div>
          </div>
        </div>

        <div className='column flex-container'>
          <div className='card'>
            <div className='card-section'>
              <img src='src/images/design0.png' alt='' />
            </div>
          </div>
        </div>

        <div className='column flex-container'>
          <div className='card'>
            <div className='card-section'>
              <img src='src/images/design0.png' alt='' />
            </div>
          </div>
        </div>

        <div className='column flex-container'>
          <div className='card'>
            <div className='card-section'>
              <img src='src/images/design0.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery

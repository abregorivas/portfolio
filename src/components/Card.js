// import React, { Component } from 'react'

// class Card extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {

//     }
//   }

//   render () {
//     return (

//     )
//   }
// }

// export default Card

import React from 'react'

const Card = props => {
  return (
    <div className='column flex-container'>
      <div className='card'>
        <div className='card-divider'>
          <h3> {props.title} </h3>
        </div>
        <div className='card-section'>
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  imgSrc: '',
  imgAlt: '',
  title: ''
}

export default Card

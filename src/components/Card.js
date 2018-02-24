import React from 'react'

const Card = props => {
  return (
    <div className='column flex-container'>
      <div className='card'>
        <div className='card-section'>
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <h3> {props.title} </h3>
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default Card

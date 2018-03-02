import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div className="column flex-container">
    <div className="card">
      <div className="card-section">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <h3> {props.title} </h3>
      <p>{props.message}</p>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired
};
export default Card;

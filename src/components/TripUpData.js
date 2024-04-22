import React from 'react';
import "./TripUpStyles.css";

const TripUpData = (props) => {
  return (
    <div className='t-card1'>
    <h4>{props.heading}</h4>
    <p>{props.text}</p>
    </div>
  )
}

export default TripUpData

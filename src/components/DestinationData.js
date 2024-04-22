import React, { Component } from 'react';
import './DestinationStyles.css';

class DestinationData extends Component{
    render(){
        return (
            <div className={this.props.className}>
                <div className='des1-text'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className='image1'>
                    <img alt='Image1' src={this.props.img1} />
                </div>
            </div>
          )
    }  
}

export default DestinationData;

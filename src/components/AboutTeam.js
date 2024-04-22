import React, { Component } from 'react';
import './AboutData.css';

class DestinationUpData extends Component{
    render(){
        return (
            <div className={this.props.className}>
                <div className='des-text2'>
                    <h2>{this.props.heading}</h2>
                    <h3>{this.props.heading2}</h3>
                    <p>{this.props.text}</p>
                </div>
                <div className='image2'>
                    <img alt='Image1' src={this.props.img1} />
                </div>
            </div>
          )
    }  
}

export default DestinationUpData;

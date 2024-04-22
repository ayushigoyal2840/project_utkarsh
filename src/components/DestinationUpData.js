import React, { Component } from 'react';
import './DestinationUpStyles.css';

class DestinationUpData extends Component{
    render(){
        return (
            <div className={this.props.className}>
                <div className='des-text3'>
                    <h2>{this.props.heading}</h2>                    
                    <p>{this.props.text}</p>
                    <h3>{this.props.heading2}</h3>
                    <p>{this.props.text2}</p>
                    <h3>{this.props.heading3}</h3>
                    <p>{this.props.text3}</p>
                    <h3>{this.props.heading4}</h3>
                    <p>{this.props.text4}</p>
                    <h3>{this.props.heading5}</h3>
                    <p>{this.props.text5}</p>
                    <h3>{this.props.heading6}</h3>
                    <p>{this.props.text6}</p>
                </div>
            </div>
          )
    }  
}

export default DestinationUpData;

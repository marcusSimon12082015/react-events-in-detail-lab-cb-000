// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component
{
  clickXY = (event) => {
    
  }

  render()
  {
    return(<button onClick={this.clickXY(this.props.onReceiveCoordinates)}></button>);
  }
}

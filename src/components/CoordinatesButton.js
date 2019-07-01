// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component
{
  this.arrayXY = new Array();

  clickXY = (event) => {
    arrayXY.push(event.clientX);
    arrayXY.push(event.clientY);
  }

  render()
  {
    return(<button onClick={this.clickXY(this.props.onReceiveCoordinates)}></button>);
  }
}

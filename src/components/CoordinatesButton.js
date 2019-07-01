// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component
{
  clickXY = (event) => {
    const arrayXY = new Array();
    arrayXY.push(event.clientX);
    arrayXY.push(event.clientY);
  }

  render()
  {
    return(<button onClick={this.clickXY(this.props.onReceiveCoordinates)}></button>);
  }
}

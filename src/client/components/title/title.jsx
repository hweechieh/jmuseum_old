import React from 'react';
import Circle from './images/circle.png';
import VerticalText from './images/vertical.png';
import TitleText from './images/title.png';

export default class Title extends React.Component {
  render() {
    return (
      <div>
          <div className="circle">
            <img src={Circle} />
          </div>

          <div className="vertical">
            <img src={VerticalText} />
          </div>

          <div className="title">
            <img src={TitleText} />
          </div>
      </div>
    );
  }
}


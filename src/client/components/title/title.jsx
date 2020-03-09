import React from 'react';
import Circle from './images/circle.png';
import VerticalText from './images/vertical.png';
import TitleText from './images/title.png';

export default class Title extends React.Component {
  render() {

    var container = {
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
    };

    var title = {
      paddingLeft: "20px",
      paddingTop: "20px" 
    };


    return (
      <div style={container}>
          <div>
            <div>
              <img src={Circle} />
            </div>

            <div>
              <img src={VerticalText} />
            </div>
          </div>

          <div style={title}>
            <img src={TitleText} />
          </div>
      </div>
    );
  }
}


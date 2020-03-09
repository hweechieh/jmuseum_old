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
      paddingLeft: "320px",
      display: "flex",
    };

    var circle = {
      width: "55%"
    };

    var vertical = {
      width: "70%"
    };

    var title = {
      width: "70%"
    }

    var title_container = {
      paddingLeft: "20px",
      paddingTop: "20px" 
    };


    return (
      <div style={container}>
          <div>
            <div>
              <img style={circle} src={Circle} />
            </div>

            <div>
              <img style={vertical} src={VerticalText} />
            </div>
          </div>

          <div style={title_container}>
            <img style={title} src={TitleText} />
          </div>
      </div>
    );
  }
}


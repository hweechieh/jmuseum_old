import React from 'react';
import MapImage from './images/map.png';
import SideNav from './../sidenav/sidenav';

export default class Map extends React.Component {
  render() {

    var container = {
      width: "100%",
      height: "1080px"
    };

    var map = {
      width: "70%",
      height: "auto",
      position: "absolute",
      zIndex: "2",
      paddingLeft: "300px",
      paddingTop: "100px"
    };

    //  need to try to see if it works
    var opacity = {
      class: "w3-animate-opacity"
    }

    return ( 
      <div style={container}>
          <div>
            <img style={ map } className={ opacity } src={ MapImage } />
          </div>

          <div>
            <SideNav />
          </div>
      </div>
    );
  }
}

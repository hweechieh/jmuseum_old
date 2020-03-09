import React from 'react';
import MapImage from './images/map.png';

export default class Map extends React.Component {
  render() {

    var map = {
      width: "30%",
      height: "auto"
    };

    return ( 
      <div>
          <div style={map} >
            <img src={MapImage} />
          </div>
      </div>
    );
  }
}

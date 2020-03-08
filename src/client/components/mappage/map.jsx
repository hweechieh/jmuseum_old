import React from 'react';
import MapImage from './images/map.png';
import Styles from './mapstyle.css';

export default class Map extends React.Component {
  render() {
    return ( 
      <div>
          <div className={Styles.map} >
            <img src={MapImage} />
          </div>
      </div>
    );
  }
}

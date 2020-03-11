import React from 'react';
import LandingPage from './landingpage/landingpage'
import PlotIcon from './ploticon/ploticon.js';

export default class ArtMuseums extends React.Component {
  render() {

    var art_icon = {
      float : "right",
      paddingTop : "100px",
      paddingRight : "20px"
    };

    
    return ( 
      <div>
          <div>
            <img style={art_icon} src={ ArtIcon } />
          </div>
      </div>
    );
  }
}

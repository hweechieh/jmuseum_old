import React from 'react';
import CloudRight from './clouds/rightcloud.png';
import CloudLeft01 from './clouds/leftcloud01.png';
import CloudLeft02 from './clouds/leftcloud02.png';
import LowOpacCloud01 from './clouds/cloud_lowopac_01.png';
import LowOpacCloud02 from './clouds/cloud_lowopac_02.png';
import Title from '../title/title';

export default class LandingPageElements extends React.Component {
  render() {

    var leftClouds = {
      display: "flex",
      flexDirection: "column",
      zIndex: "-1",
    };

    var rightCloud = {
      float: "right",
    };

    var leftCloud01 = {
      width: "40%",
      float: "left",
      paddingTop: "50px",
    };

    var leftCloud02 = {
      width: "20%",
      float: "left",
    };

    return ( 
      <div>
        <div>

        <div style={leftClouds}>
          <div style={leftCloud01}>
              <img src={CloudLeft01} />
          </div>


          <div style={leftCloud02}>
            <img src={CloudLeft02} />
          </div>
        </div>

        <div style={rightCloud}>
            <img src={CloudRight} />
          </div>

        
        <Title />

          <div className="lowopac-01">
            <img src={LowOpacCloud01} />
          </div>

          <div className="lowopac-02">
            <img src={LowOpacCloud02} />
          </div>

        </div>
      </div>
    );
  }
}

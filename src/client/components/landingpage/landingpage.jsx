import React from 'react';
import './style.scss';
import CloudRight from './clouds/rightcloud.png';
import CloudLeft01 from './clouds/leftcloud01.png';
import CloudLeft02 from './clouds/leftcloud02.png';
import LowOpacCloud01 from './clouds/cloud_lowopac_01.png';
import LowOpacCloud02 from './clouds/cloud_lowopac_02.png';
import Title from '../title/title';

export default class LandingPageElements extends React.Component {
  render() {
    return ( 
      <div>
        <Title />
        <div>
          <div className="rightcloud">
            <img src={CloudRight} />
          </div>

          <div className="leftcloud-01">
            <img src={CloudLeft01} />
          </div>

          <div className="leftcloud-02">
            <img src={CloudLeft02} />
          </div>

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

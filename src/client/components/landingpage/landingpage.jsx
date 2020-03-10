import React from 'react';
import CloudRight from './clouds/rightcloud.png';
import CloudLeft01 from './clouds/leftcloud01.png';
import CloudLeft02 from './clouds/leftcloud02.png';
import LowOpacCloud01 from './clouds/cloud_lowopac_01.png';
import LowOpacCloud02 from './clouds/cloud_lowopac_02.png';
import Begin from './beginicon.png';
import Title from '../title/title';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Map from '../mappage/map';
import MapImage from '../mappage/images/map.png';
import PlotIcon from '../../../../images/ploticon.png';
import axios from 'axios';


export default class LandingPageElements extends React.Component {

  constructor() {
    super();

    this.state = {
        clicked : false,
        artmuseums : []
    }
}

  getArtMuseums(){
    const url = '/artmuseums';

    axios.get(url)
      .then((response) => {
        
        const data = response.data
        this.setState({ artmuseums : data })
      }).catch((error)=>{
        console.log(error);
      })
  }

  clickHandler(){
    console.log("clicking");
    this.setState({clicked : true});
    this.getArtMuseums();
  }


  render() {
    var leftClouds = {
      display: "flex",
      flexDirection: "column",
      zIndex: "-1",
    };

    var rightCloud = {
      width: "15%",
      float: "right",
    };

    var leftCloud01 = {
      width: "20%",
      float: "left",
      paddingTop: "50px",
    };

    var leftCloud02 = {
      width: "20%",
      float: "left",
      paddingLeft: "150px",
      zIndex: "-1"
    };

    var lowopac_01 = {
      width: "40%",
      paddingLeft: "500px",
      zIndex: "-2"
    };

    var lowopac_02 = {
      width: "67%",
      paddingLeft: "900px",
      zIndex: "-2"
    };

    var begin_align = {
      margin: "auto",
      width: "50%",
      display: "block",
      paddingLeft: "330px"
    };

    var begin = {
      width: "10%",
      outline: "none"
    };

    var map = ''
    if ( this.state.clicked === true ) {
      map = <Map />
    }

  const artmuseums = this.state.artmuseums.map(( museum, index )=>{
    return (<div>
      <area shape="circle" coords={ museum.xaxis, museum.yaxis } src={ PlotIcon } alt={ museum.title }></area></div>)
    });

    return ( 
      <div>

        <div style={ leftClouds }>
          <div><img style={ leftCloud01 } src={ CloudLeft01 } /></div>
          <div><img style={ leftCloud02 } src={ CloudLeft02 } /></div>
        </div>

        <div><img style={ rightCloud } src={ CloudRight } /></div>
        <div><img style={ lowopac_01 } src={ LowOpacCloud01 } /></div>

        <Title />

        <div><img style={ lowopac_02 } src={ LowOpacCloud02 } /></div>
        <Link activeClass="active" to="map" spy={true} smooth={true} duration={500} onClick={() => {this.clickHandler()}}><div style={ begin_align }><input style={ begin } type="image" src={ Begin } /></div>

        </Link>

        {/* Important to leave the <Element> tag outside as the library will be looking for it */}
        {/* If otherwise, it will render on first click then scroll on second */}
        <Element name="map">{map}</Element>

        {artmuseums}

        {/* <div>
          <img src={ MapImage } width="1289px" height="1300px" alt="Japan" useMap="#japanmap" />
          <map name="japanmap">
            { artmuseums }
          </map>
        </div> */}

      </div>
    );
  }
}

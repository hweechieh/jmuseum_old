import React from 'react';
import { hot } from 'react-hot-loader';
import LandingPageElements from './components/landingpage/landingpage';
import Map from './components/mappage/map';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import axios from 'axios';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      artMuseums : [],
      // currentSelectedMuseum: {title} 
    }
  }

  clickHandler(){
    console.log("clicking");
    this.getArtMuseums();
  }

  getArtMuseums(){

    const url = '/artmuseums';

    axios.get(url)
      .then((response) => {
        
        const data = response.data
        this.setState({ artMuseums : data })
        // console.log(this.state);
      }).catch((error)=>{
        console.log(error);
      })
  }


  render() {
    const artmuseums = this.state.artMuseums.map((museum, index)=>{
        return (<div>
                <p>{museum.title}</p>
                </div>)
    });

    return ( 
      <div>
        <LandingPageElements />
        <Link activeClass="active" to="map" spy={true} smooth={true} duration={500} onClick={() => {this.clickHandler('map')}}>Let's Explore!</Link>
        {artmuseums}
        <Element name="map"><Map /></Element>
      </div>
    );
  }
}

export default hot(module)(App);

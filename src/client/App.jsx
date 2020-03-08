import React from 'react';
import { hot } from 'react-hot-loader';
import LandingPageElements from './components/landingpage/landingpage';
import Map from './components/mappage/map';

// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

{/* <Element name="myScrollToElement">HAHAHAHA</Element>

scroller.scrollTo('myScrollToElement', {
  duration: 1500,
  delay: 100,
  smooth: true,
  containerId: 'ContainerElementID',
  offset: 50, // Scrolls to element + 50 pixels down the page
}) */}

class App extends React.Component {

clickHandler(){
  console.log("clicking");
}

  render() {
    return ( 
      <div>
        <LandingPageElements />
        <button onClick={()=>{this.clickHandler()}}>Let's Explore!</button>
        <Map />
      </div>
    );
  }
}

export default hot(module)(App);

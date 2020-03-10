import React from 'react';
import { hot } from 'react-hot-loader';
import LandingPageElements from './components/landingpage/landingpage';
// import PlotIcon from './images/plotIcon.png';
import axios from 'axios';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      // historyMuseums : [],
      // warMuseums : [],
      // scienceMuseums : [],
      // disasterMuseums : [],
      // othersMuseums : [],
      
      currentSelectedMuseum : null
    }
  }


  // getDetails(index){
  //   console.log(index);
  //   const data = this.state.artMuseums[index]
  //   this.setState({ currentSelectedMuseum : data })
  //   // console.log(this.state);
  // };


  render() {


    // let museumdetails = this.state.currentSelectedMuseum
    // if (museumdetails) {
    // museumdetails = (<div>
    //           <p>{museumdetails.admission}</p>
    //         </div>)
    // }

    var container = {
      width: "100%",
      height: "auto"
    } 

    return ( 
      <div style={container}>
        <LandingPageElements />
        {/* <div style={{color: "white"}}>{artmuseums}</div> */}
        {/* <div>{museumdetails}</div> */}
      </div>
    );
  }
}

export default hot(module)(App);

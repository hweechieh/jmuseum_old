import React from 'react';
import { hot } from 'react-hot-loader';
import LandingPageElements from './components/landingpage/landingpage';
import axios from 'axios';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      artMuseums : [],
      // historyMuseums : [],
      // warMuseums : [],
      // scienceMuseums : [],
      // disasterMuseums : [],
      // othersMuseums : [],
      
      currentSelectedMuseum : null
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


  // getDetails(index){
  //   console.log(index);
  //   const data = this.state.artMuseums[index]
  //   this.setState({ currentSelectedMuseum : data })
  //   // console.log(this.state);
  // };


  render() {
    const artmuseums = this.state.artMuseums.map((museum, index)=>{
      return (<div>
                <a onClick={() => {this.getDetails(index)}}>{museum.title}</a>
              </div>)
    });

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
        <div style={{color: "white"}}>{artmuseums}</div>
        {/* <div>{museumdetails}</div> */}
      </div>
    );
  }
}

export default hot(module)(App);

import React from 'react';
import ArtIcon from './articon.png';

export default class Art extends React.Component {
  render() {

    // const artmuseums = this.state.artMuseums.map((museum, index)=>{
    //   return (<div>
    //             {museum.title}
    //             <a onClick={() => {this.getDetails(index)}}>
    //               <img src={PlotIcon}/></a>
    //           </div>)
    // });

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

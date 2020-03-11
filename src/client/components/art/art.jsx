import React from "react";
// import ArtIcon from './articon.png';

export default class Art extends React.Component {
  render() {
    var art_icon = {
      float: "right",
      paddingTop: "100px",
      paddingRight: "20px"
    };

    return (
      <div>
        <div>{/* <img style={art_icon} src={ ArtIcon } /> */}</div>
      </div>
    );
  }
}

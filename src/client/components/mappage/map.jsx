import React from "react";
// import SideNav from "./../sidenav/sidenav";

export default class Map extends React.Component {
  render() {
    var container = {
      width: "100%",
      height: "1080px"
    };

    var map = {
      width: "70%",
      height: "auto",
      position: "absolute",
      zIndex: "2",
      paddingLeft: "300px",
      paddingTop: "100px"
    };

    return (
      <div style={container}>
        <div style={{ position: "relative" }}></div>
        <div>{/* <SideNav /> */}</div>
      </div>
    );
  }
}

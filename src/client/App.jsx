import React from "react";
import { hot } from "react-hot-loader";
import LandingPageElements from "./components/landingpage/landingpage";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSelectedMuseum: null
    };
  }

  render() {
    var container = {
      width: "100%",
      height: "auto"
    };

    return (
      <div style={container}>
        <LandingPageElements />
      </div>
    );
  }
}

export default hot(module)(App);

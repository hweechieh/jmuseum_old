import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import React from "react";
import axios from "axios";

import CloudRight from "./clouds/rightcloud.png";
import CloudLeft01 from "./clouds/leftcloud01.png";
import CloudLeft02 from "./clouds/leftcloud02.png";
import LowOpacCloud01 from "./clouds/cloud_lowopac_01.png";
import LowOpacCloud02 from "./clouds/cloud_lowopac_02.png";
import Begin from "./beginicon.png";

import Title from "../title/title";
import SmallTitle from "./small_title.png";

export default class LandingPageElements extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
      artmuseums: [],
      selectedMuseum: null
    };
    this.selectHandler = this.selectHandler.bind(this);
  }

  componentDidMount() {
    this.getArtMuseums();
  }

  getArtMuseums() {
    const url = "/artmuseums";

    axios
      .get(url)
      .then(response => {
        const data = response.data;
        this.setState({ artmuseums: data });
        console.log(this.state.artmuseums);
      })
      .catch(error => {
        console.log(error);
      });
  }

  clickHandler() {
    console.log("clicking");
    this.setState({ clicked: true });
    this.getArtMuseums();
  }

  selectHandler(e) {
    var selectedMuseum = this.state.artmuseums[e.target.index + 1];
    console.log(e.target.index + 2);
    console.log(selectedMuseum);
    this.setState({ selectedMuseum: selectedMuseum });
  }

  render() {
    var leftClouds = {
      display: "flex",
      flexDirection: "column",
      zIndex: "-1"
    };

    var rightCloud = {
      width: "15%",
      float: "right"
    };

    var leftCloud01 = {
      width: "20%",
      float: "left",
      paddingTop: "50px"
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
      outline: "none",
      paddingTop: "80px"
    };

    var small_title = {
      width: "10%",
      height: "auto",
      paddingRight: "30px",
      paddingTop: "100px"
    };

    var map_details = {
      fontFamily: "montserrat, sans-serif",
      fontSize: "14px",
      color: "#fff3c3",
      fontWeight: "medium",
      paddingTop: "-10px"
    };

    var bgImage = {
      position: "fixed"
    };

    var descrip = {
      fontFamily: "montserrat, sans-serif",
      fontSize: "14px",
      color: "#ffde5e",
      fontStyle: "italic"
    };

    var title = {
      fontFamily: "montserrat, sans-serif",
      fontSize: "16px",
      color: "#ffdf8d",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "5px",
      paddingBottom: "10px"
    };

    const BackgroundImage = () => {
      const [image] = useImage("https://i.imgur.com/rBPOm8e.png");
      return (
        <Image
          image={image}
          width={820.995}
          height={828.1}
          x={255}
          y={54}
          style={bgImage}
        />
      );
    };

    const PlotIcon = () => {
      const [image] = useImage("https://i.imgur.com/M5Z3qP3.png");
      const imageRef = React.useRef();
      return this.state.artmuseums.map((museum, index) => {
        return (
          <Image
            key={index}
            ref={imageRef}
            image={image}
            width={19}
            height={30}
            x={museum.xaxis * 0.87 + 10}
            y={museum.yaxis * 0.85 - 75}
            onClick={e => this.selectHandler(e)}
            onMouseOver={e => {
              // const TitleOfMuseum = museum.title;
              //   .title);
              // const admission = this.state.artmuseums[e.target.index - 1]
              //   .admission;
              // const closed = this.state.artmuseums[e.target.index - 1].closes;
              // const openinghrs = this.state.artmuseums[e.target.index - 1]
              //   .opening_hours;
              // const transport = this.state.artmuseums[e.target.index - 1]
              //   .transport;
              // const located = this.state.artmuseums[e.target.index - 1].located;
              // console.log(this);
              // console.log(e.target.index);
              // console.log(e.target.attrs.x);
              // console.log(e.target.attrs.y);
              // console.log(this.state.artmuseums[e.target.index - 1].xaxis);
              // console.log(this.state.artmuseums[e.target.index - 1].yaxis);
              // console.log(this.state.artmuseums[e.target.index - 1].title);
            }}
            // value=
          />
        );
      });
    };

    var map = "";
    if (this.state.clicked === true) {
      map = <BackgroundImage />;
    }

    return (
      <div>
        <div style={leftClouds}>
          <div>
            <img style={leftCloud01} src={CloudLeft01} />
          </div>
          <div>
            <img style={leftCloud02} src={CloudLeft02} />
          </div>
        </div>

        <div>
          <img style={rightCloud} src={CloudRight} />
        </div>
        <div>
          <img style={lowopac_01} src={LowOpacCloud01} />
        </div>

        <Title />

        <div>
          <img style={lowopac_02} src={LowOpacCloud02} />
        </div>
        <Link
          activeClass="active"
          to="map"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            this.clickHandler();
          }}
        >
          <div style={begin_align}>
            <input style={begin} type="image" src={Begin} />
          </div>
        </Link>

        <Element name="map">{map}</Element>

        {this.state.selectedMuseum ? (
          <div
            style={{
              position: "absolute",
              paddingLeft: "100px",
              paddingTop: "100px"
            }}
          >
            <h4 style={title}>{this.state.selectedMuseum.title}</h4>

            <h5 style={descrip}>Standard Admission Fee</h5>
            <h5 style={map_details}>
              {this.state.selectedMuseum.admission + "yen"}
            </h5>

            <h5 style={descrip}>Operating Hours</h5>
            <h5 style={map_details}>
              {this.state.selectedMuseum.opening_hours}
            </h5>

            <h5 style={descrip}>Nearest Train Station / Port</h5>
            <h5 style={map_details}>{this.state.selectedMuseum.transport}</h5>

            <h5 style={descrip}>Address</h5>
            <h5 style={map_details}>{this.state.selectedMuseum.located}</h5>
          </div>
        ) : null}

        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <BackgroundImage />
            <PlotIcon />
          </Layer>
        </Stage>
      </div>
    );
  }
}

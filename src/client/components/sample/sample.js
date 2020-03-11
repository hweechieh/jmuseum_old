import React, { Component } from "react";
// import { render } from "react-dom";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";


// the first very simple and recommended way:
const PlotIcon = () => {
  const [image] = useImage('https://i.imgur.com/M5Z3qP3.png');
  return <Image image={image} width={19} height={30} x={250} y={100} />;
};

// const BackgroundImage = () => {
//   const [image] = useImage('https://i.imgur.com/oQHMP73.png');
//   return <Image image={image} width={1675.5} height={1690} x={500} y={400} />;
// };

export default class Sample extends Component {
  render() {
    return (
      <Stage width={1675.5} height={1690}>
        <Layer>

        <BackgroundImage></BackgroundImage>
        <PlotIcon />

        </Layer>
      </Stage>
    );
  }
}

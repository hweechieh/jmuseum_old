import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";


const BackgroundImage = () => {
    const [image] = useImage('https://i.imgur.com/rBPOm8e.png');
    return <Image image={image} width={820.995} height={828.1} x={250} y={54} />;
  };


export default class MapImage extends Component {
    render() {
      
      return (
        <Stage width={1675.5} height={1690}>
          <Layer>

          <BackgroundImage></BackgroundImage>

          </Layer>
        </Stage>
      );
    }
  }
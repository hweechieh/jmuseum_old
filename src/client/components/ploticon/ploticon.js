import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

const PlotIcon = () => {
  const [image] = useImage("https://i.imgur.com/M5Z3qP3.png");
  return <Image image={image} width={19} height={30} x={250} y={100} />;
};

export default class PlotIcon extends Component {
  render() {
    return (
      <Stage>
        <Layout>
          <PlotIcon />
        </Layout>
      </Stage>
    );
  }
}

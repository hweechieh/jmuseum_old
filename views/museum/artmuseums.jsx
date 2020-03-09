var React = require("react");

class ArtMuseums extends React.Component {
  render() {
    // console.log(this.props.allPokemon);

    const artmuseums = this.props.allMuseum.map((museum, i)=>{
      return <p>{museum.title}</p>;
    });

    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          {artmuseums}
        </body>
      </html>
    );
  }
}

module.exports = ArtMuseums;

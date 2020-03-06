import React from 'react';
import { hot } from 'react-hot-loader';
// import Form from './components/form/form';
import Title from './components/title/title';
// import BgImage from './images/background.jpg';

class App extends React.Component {
  render() {
    return (
      
      // <div style="background-image: url('./images/background.jpg');" />
      <div>
        {/* <Form /> */}
        <Title />
        Welcome.
      </div>
    );
  }
}

export default hot(module)(App);

import React from 'react';
import { hot } from 'react-hot-loader';
// import Form from './components/form/form';
import Title from './components/title/title';
// import BgImage from './images/bg';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Form /> */}
        <Title />
        Welcome.
        {/* <BgImage /> */}
      </div>
    );
  }
}

export default hot(module)(App);

import React, { Component } from 'react';
import Main from './Main';
import Why from './Why';
import Coverage from './Coverage';
import Exclusions from './Exclusions';
import Plans from './Plans';
import Testimonies from './Testimonies';
import Footer from './Footer';

class Landing extends Component {
  render() {
    return (
      <div>
        <Main />
        <Why />
        <Coverage />
        <Exclusions />
        <Plans />
        <Testimonies />
        <Footer />
      </div>
    );
  }
}

export default Landing;
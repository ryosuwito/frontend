import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Intro from '../../components/Home/Intro/Intro';
import About from '../../components/Home/About/About.js';
import OpeningText from '../../components/OpeningText';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Intro />
        <OpeningText
          text='We empower a team of exceptional individuals to identify and capture trading and
          investment opportunities globally.'
        />
        <About />
        <Footer />
      </>
    );
  }
}

export default Home;

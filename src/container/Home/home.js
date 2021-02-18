import React, { Component } from 'react';
import Layout from '../../layouts/layout';
import { HashLink as Link } from 'react-router-hash-link';
import classes from './home.module.css';


const AboutCard = ({ text, heading, img_src, url, alt }) => {
  return (
    <div className={classes.aboutCard}>
      <img src={img_src} style={{ width: '80px', marginTop: '50px' }} alt={ alt }/>
      <h3 className={`${classes.heading}`}>{heading}</h3>
      <p className='para'>{text}</p>
      <Link to={url} className={`underline-light ${classes.button}`}>
        Learn More
      </Link>
    </div>
  );
};

const BodyContent = function(props) {
  return (
    <div className={classes.About}>
      <div className={classes.AboutCards}>
        <AboutCard
          heading='Approach'
          text='We drive innovation by embracing diversity, 
          leveraging technology that powers our trading strategies, and expanding our trading reach.'
          url='/about#about-approach'
          img_src='/images/home/approach.png'
          alt='approach'
        />

        <AboutCard
          heading='Culture'
          text='Our flat organisational structure allows each and every employee to make an impact. 
          We encourage our employees to relentlessly pursue innovation.'
          url='/culture'
          img_src='/images/home/culture.png'
          alt='culture'
        />
        <AboutCard
          heading='Careers'
          text='Our people are our greatest asset and the backbone of our organisation. 
          We are committed to helping our employees reach their full potential.'
          url='/careers'
          img_src='/images/home/career.png'
          alt='career'
        />
      </div> 
    </div>
  )
}


class Home extends Component {
  render() {
    return <Layout bodyContent={ <BodyContent/> }
      bannerVideo='/videos/home.mp4' bannerVideoAlt='home-video'
      bannerSmallImage='/images/about/0.jpg' bannerImageAlt='home-banner-image'
      bannerMainTitle={ <p>Where <i>technology</i> and <i>finance</i> intersect</p> }
      bannerSubTitle={ <p>A world-class, forward-looking institution, in the vanguard of innovation</p> }
    />
  }
}

export default Home;
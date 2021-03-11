import React, { Component, useEffect, useState } from 'react';
import Header from '../container/Header/Header';
import Footer from '../container/Footer/Footer';
import classes from './layout.module.css';

const Banner = function(props) {
  var imageClass = props.cmp > 0? classes.bannerMediaWidth: classes.bannerMediaHeight;
  var videoClass = props.cmpVideo > 0? classes.bannerMediaWidth: classes.bannerMediaHeight;
  return (
    <div className={ classes.banner }>
      { props.bannerVideo && 
      <video className={ `${classes.bannerVideo} ${ videoClass }`} autoPlay muted loop>
        <source src={ props.bannerVideo } type='video/mp4' />
      </video> }
      { props.bannerImage && <img src={ props.bannerImage } className={ `${classes.bannerImage} ${ imageClass }` } alt={ props.bannerImageAlt }/>}
      <img src={ props.bannerSmallImage } className={ classes.bannerSmallImage } alt={ props.bannerImageAlt } />
      <div className={ classes.bannerTitle }>
        <h1 className={ classes.bannerMainTitle }>
          { props.bannerMainTitle }
        </h1>
        <div className={ classes.bannerSubTitle }>
          { props.bannerSubTitle }
        </div>
      </div>
    </div>
  )
}

function Layout (props) {
  const [cmp, setCmp] = useState(window.innerWidth - window.innerHeight * 2);
  const [cmpVideo, setCmpVideo] = useState(window.innerWidth * 9 - window.innerHeight * 16);
  useEffect(() => {
    const onResizeWindow = () => { 
      setCmp(window.innerWidth - window.innerHeight * 2);
      setCmpVideo(window.innerWidth * 9 - window.innerHeight * 16)
    }
    window.addEventListener('resize',  onResizeWindow);

    return () => window.removeEventListener('resize', onResizeWindow);
  }, [])

  return (
    <div>
      <Header />
      <Banner { ...props } cmp={ cmp } cmpVideo={ cmpVideo } />
      { props.bodyContent }
      <Footer />
    </div>
  );
}

export default Layout;
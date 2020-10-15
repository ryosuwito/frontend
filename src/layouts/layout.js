import React, { Component } from 'react';
import Header from '../container/Header/Header';
import Footer from '../container/Footer/Footer';
import classes from './layout.module.css';

const Banner = function(props) {
  var mediaClass = props.cmp > 0? classes.bannerMediaWidth: classes.bannerMediaHeight
  return (
    <div className={ classes.banner }>
      { props.bannerVideo && 
      <video className={ `${classes.bannerVideo} ${ mediaClass }`} autoPlay muted loop>
        <source src={ props.bannerVideo } type='video/mp4' />
      </video> }
      { props.bannerImage && <img src={ props.bannerImage } className={ `${classes.bannerImage} ${ mediaClass }` } alt={ props.bannerImageAlt }/>}
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

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cmp: window.innerWidth - window.innerHeight * 2 
    }
    this.onResizeWindow = () => this.setState({ cmp: window.innerWidth - window.innerHeight * 2 })
    window.addEventListener('resize',  this.onResizeWindow);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeWindow);
  }
  render() {
    return (
      <div>
        <Header />
        <Banner { ...this.props } cmp={ this.state.cmp }/>
        { this.props.bodyContent }
        <Footer />
      </div>
    );
  }
}

export default Layout;
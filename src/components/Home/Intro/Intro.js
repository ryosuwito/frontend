import React from 'react';
import classes from './Intro.module.css';
import { p_color } from '../../../constants';

const Intro = () => {
  return (
    <div className={classes.banner}>
      <video className={classes.video} width='100%' height='100%' autoPlay muted loop>
        <source src='/videos/home.mp4' type='video/mp4' />
      </video>
      <h1 className={classes.bannerTitle}>
        Where <span style={{ color: p_color }}>experience</span> <span>meets</span> innovation
        <p style={{ fontSize: '16px', fontWeight: 400 }}>
          A results-driven team at the intersection of trading + technology
        </p>
      </h1>
    </div>
  );
};

export default Intro;

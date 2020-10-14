import React from 'react';
import classes from './About.module.css';
import AboutCards from './AboutCards/AboutCards';

const about = () => {
  return (
    <div className={classes.About}>
      <AboutCards />
    </div>
  );
};

export default about;

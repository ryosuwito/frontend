import React from 'react';
import classes from './index.module.css';

const OpeningText = ({ text }) => {
  return (
    <div className={classes.root}>
      <p className={classes.content}>
        <span>{text}</span>
      </p>
    </div>
  );
};

export default OpeningText;

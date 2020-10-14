import React, { useEffect } from 'react';
import classes from './AboutCard.module.css';
import { HashLink as Link } from 'react-router-hash-link';

const AboutCard = ({ text, heading, img_src, url }) => {
  return (
    <div className={classes.aboutCard}>
      <img src={img_src} style={{ width: '80px', marginTop: '50px' }} />
      <h3 className={`${classes.heading}`}>{heading}</h3>
      <p className='para'>{text}</p>
      <Link to={url} className={`underline-light ${classes.button}`}>
        Learn More
      </Link>
    </div>
  );
};

export default AboutCard;

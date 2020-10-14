import React, { Component } from 'react';
import classes from './Footer.module.css';
import NavigationItem from './NavigationItem';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className={classes.Root}>
        <div className={classes.Footer}>
          <div className={classes.CenterItems}>
            <ul className={classes.navigationItems} style={{ padding: 0 }}>
              <NavigationItem link='/'>Home</NavigationItem>
              <NavigationItem link='/about'>About</NavigationItem>
              <NavigationItem link='/culture'>Culture</NavigationItem>
              <NavigationItem link='/careers'>Careers</NavigationItem>
              <NavigationItem link='/contact'>Contacts</NavigationItem>
            </ul>
          </div>
          <div className={classes.BottomItems}>
            <div className={classes.copyright}>
              © 2020 Dynamic Technology Lab Pte Ltd. All Rights Reserved.
            </div>
            <div className={classes.LegalNav}>
              <Link to='/terms-of-use'>Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/'>Home</NavigationItem>
      <NavigationItem link='/about'>About</NavigationItem>
      <NavigationItem link='/culture'>Culture</NavigationItem>
      <NavigationItem link='/careers'>Careers</NavigationItem>
      <NavigationItem link='/contact'>Contact</NavigationItem>
    </ul>
  );
};

export default navigationItems;

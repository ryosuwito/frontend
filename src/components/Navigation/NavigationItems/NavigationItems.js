import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

import routines from '../../../routines';

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link={ routines.home.url }>{ routines.home.label }</NavigationItem>
      <NavigationItem link={ routines.about.url }>{ routines.about.label }</NavigationItem>
      <NavigationItem link={ routines.culture.url }>{ routines.culture.label }</NavigationItem>
      <NavigationItem link={ routines.career.url }>{ routines.career.label }</NavigationItem>
      <NavigationItem link={ routines.contact.url }>{ routines.contact.label }</NavigationItem>
    </ul>
  );
};

export default navigationItems;

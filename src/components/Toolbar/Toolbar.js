import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import MenuToggle from '../DropdownMenu/MenuToggle/MenuToggle';
import { Link } from 'react-router-dom';

const Toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <Link to='/'>
        <img src='/images/logo.jpg' alt='drw_logo' className={classes.logo} />
      </Link>
      <div className={classes.DesktopOnly}>
        <NavigationItems />
      </div>
      <div className={classes.MobileOnly} onClick={props.toggleDropdownMenu}>
        <MenuToggle />
      </div>
    </div>
  );
};

export default Toolbar;

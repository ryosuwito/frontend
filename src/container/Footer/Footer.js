import React, { Component } from 'react';
import classes from './Footer.module.css';
import NavigationItem from './NavigationItem';
import { Link } from 'react-router-dom';

import routines from '../../routines';
import messages from  '../../messages';

class Footer extends Component {
  getCurrentYear = () => (new Date()).getFullYear()
  render() {
    return (
      <div className={classes.Root}>
        <div className={classes.Footer}>
          <div className={classes.CenterItems}>
            <ul className={classes.navigationItems} style={{ padding: 0 }}>
              <NavigationItem link={ routines.home.url }>{ routines.home.label }</NavigationItem>
              <NavigationItem link={ routines.about.url }>{ routines.about.label }</NavigationItem>
              <NavigationItem link={ routines.culture.url }>{ routines.culture.label }</NavigationItem>
              <NavigationItem link={ routines.career.url }>{ routines.career.label }</NavigationItem>
              <NavigationItem link={ routines.contact.url }>{ routines.contact.label }</NavigationItem>
            </ul>
          </div>
          <div className={classes.BottomItems}>
            <div className={classes.copyright}>
              <p>{ messages.footer.copyright }</p>
            </div>
            <div className={classes.LegalNav}>
              <Link to={ routines.terms_of_use.url }>{ routines.terms_of_use.label }</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

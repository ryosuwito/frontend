import React, { Component } from 'react';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import Toolbar from '../../components/Toolbar/Toolbar';
import classes from './Header.module.css';

class Header extends Component {
  state = {
    showDropdownMenu: false,
  };

  showDropdownMenuHandler = () => {
    this.setState((prevState) => {
      return { showDropdownMenu: !prevState.showDropdownMenu };
    });
  };

  render() {
    return (
      <div className={classes.Header}>
        <Toolbar toggleDropdownMenu={this.showDropdownMenuHandler} />
        {this.state.showDropdownMenu ? <DropdownMenu /> : null}
      </div>
    );
  }
}

export default Header;

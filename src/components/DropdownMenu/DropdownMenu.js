import React from "react";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import classes from "./DropdownMenu.module.css";

const dropdownMenu = (props) => {
  return (
    <div className={classes.DropdownMenu}>
      <NavigationItems />
    </div>
  );
};

export default dropdownMenu;

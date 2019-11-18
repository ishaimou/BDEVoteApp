import React from "react";
import classes from "./navBar.module.css";

const NavBar = () => {
  const Logout = () => {
    localStorage.removeItem("access");
    window.location.reload();
  };
  return (
    <div className={classes.main}>
      <div />
      <span className={classes.school}>1337</span>
      <button className={classes.logoutButton} onClick={Logout}>
        logout
      </button>
    </div>
  );
};

export default NavBar;

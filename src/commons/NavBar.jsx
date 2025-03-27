import React from "react";
import styles from "./NavBar.module.css";
import logo from "../assets/turnerscars_logo_1line_horz_true-rgb-desktop.png";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="Turners Cars Logo" />
      </div>
      <ul className={styles.ul}>
        <li>
          <a className={styles.a} href="/">
            Home
          </a>
        </li>
        <li>
          <a className={styles.a} href="/about">
            About
          </a>
        </li>
        <li>
          <a className={styles.a} href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { useLocation } from 'react-router-dom'
import styles from './footer.module.css'; 
import Facebook from "./Facebook/Facebook";
import Instagram from "./Instagram/Instagram";
import Twitter from './Twiteer/Twitter';
import Linkedin from "./Linkedin/Linkedin";
import CopyRight from "./Copyright/CopyRight"

function Footer() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const copyClass = isHomePage ? styles.Copy2 : styles.Copy;

  return (
    <footer className={styles.footer}>
    <ul>
    <li><Facebook/></li>
    <li><Instagram/></li>
    <li><Twitter/></li>
    <li><Linkedin/></li>
  </ul>
  <div className={copyClass}><CopyRight/></div>
    </footer>
  );
}

export default Footer;
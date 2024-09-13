import React from 'react';
import styles from "./home.module.css"

import { Link, useLocation} from 'react-router-dom'; 

function Home() {

  const linkClass = location.pathname === '/' ? styles.Home2 : styles.Home1;
  return (
    <li className={styles.home}><Link to="/"className={linkClass} >Home</Link></li>
  );
}

export default Home;
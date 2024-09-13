import React from 'react';

import styles from "./contact.module.css"
import { Link, useLocation} from 'react-router-dom'; 

function Contact() {

  const linkClass = location.pathname === '/Contact' ? styles.Contact2 : styles.Contact1;
  return (
    <li className={styles.contact}><Link to="/Contact"className={linkClass} >Contact</Link></li>
  );
}

export default Contact;
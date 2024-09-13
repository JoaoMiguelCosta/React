import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './hamburguer.module.css';

function Hamburguer({ className, onClick }) {
  return (
    <li className={`${styles.hamburguer} ${className}`} onClick={onClick}>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.icon}
      />
    </li>
  );
}

export default Hamburguer;
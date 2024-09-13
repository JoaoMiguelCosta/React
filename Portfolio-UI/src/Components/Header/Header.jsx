import React from 'react';
import styles from './header.module.css';

function Header({ menu }) {
 
  return (
    
      <ul className={styles.ul}>
        {menu.map(({ id, component, className }) => (
          <li key={id} className={className}>
            {component}
          </li>
        ))}
      </ul>
    
  );
}



export default Header;
import React from 'react';
import { Link, useLocation} from 'react-router-dom'; 
import styles from "./works.module.css"; 

function Works() {

  const location = useLocation(); 

 
  const linkClass = ['/work', '/workdetail/1'].includes(location.pathname) ? styles.WorksText2 : styles.WorksText;
  return (
    <li className={styles.works}>
      <Link to="/work" className={linkClass}>Works</Link>
      
    </li>
  );
}

export default Works;
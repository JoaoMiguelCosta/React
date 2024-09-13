import React from 'react';
import styles from "../Button/button.module.css"


const Button = () => {
    return (
        <button className={styles.button}><span className={styles.name}>Download Resume</span></button>
      
    );
  };
  
  export default Button;
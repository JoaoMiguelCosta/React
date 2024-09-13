import React from 'react';
import styles from "./textcontact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 




const TextContact = () => {
    return (
        <>
          
             
              <p className={styles.text} >Feel free to contact me through one of the options below:</p>
              <p className={styles.text1}> <FontAwesomeIcon icon={faEnvelope} />  Email:</p>
              <p className={styles.text2}>example@hotmail.com</p>
              <p className={styles.text3}><FontAwesomeIcon icon={faPhone} />Phone:</p>
              <p className={styles.text4}> (+351) xxx xxx xxx</p>
            
          
          
        </>
    );
};

export default TextContact;
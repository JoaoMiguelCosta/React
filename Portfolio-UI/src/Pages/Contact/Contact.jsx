import React from 'react';
import ContactForm from "../../Components/ContactForm/ContactForm"
import Header1 from "../../Components/Header/Header1"
import styles from "./contact.module.css"
import TextContact from "../../Components/Secção1Contact/TextContact/TextContact"
import TextContactForm from "../../Components/Secção2Contact/TextContactForm/TextContactForm"






function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.header}><Header1/></div>
      
      <div className={styles.section}>
        <div className={styles.sectionContent}>
          <TextContact />
        </div>
      </div>
      
      <div className={styles.section}>
        <div className={styles.sectionContent}>
          <TextContactForm />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
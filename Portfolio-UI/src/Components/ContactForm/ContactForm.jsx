import React, { useState } from 'react';
import { useContact } from '../../Context/ContactContext';
import styles from "./contactform.module.css"

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { status, sendContactMessage } = useContact();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendContactMessage({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.pai}>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
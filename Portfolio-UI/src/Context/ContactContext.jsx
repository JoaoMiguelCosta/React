import React, { createContext, useState, useContext } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [status, setStatus] = useState('');

  const sendContactMessage = async (contactData) => {
    setStatus('Enviando...');
    try {
      const response = await fetch('http://localhost:5000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) throw new Error('Erro ao enviar mensagem');
      setStatus('Mensagem enviada com sucesso!');
    } catch (error) {
      setStatus('Erro ao enviar mensagem');
    }
  };

  return (
    <ContactContext.Provider value={{ status, sendContactMessage }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
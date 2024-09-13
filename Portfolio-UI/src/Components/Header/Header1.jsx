import React, { useState } from 'react';
import Header from './Header';
import Works from "../Header/Works/Works";
import Blog from "../Header/Blog/Blog";
import Contact from "../Header/Contact/Contact";
import Hamburguer from "../Header/Hamburger/Hamburguer";
import Home from "../Header/Home/Home"
import styles from './header.module.css';



const menu1 = [
  { id: 13, component: <Home />, className: styles.li13},
  { id: 1, component: <Works />, className: styles.li1 },
  { id: 2, component: <Blog />, className: styles.li2 },
  { id: 3, component: <Contact />, className: styles.li3 },
  
];

const menu3 = [
  { id: 14, component: <Home />, className: styles.li14},
  { id: 4, component: <Works />, className: styles.li5 },
  { id: 5, component: <Blog />, className: styles.li6 },
  { id: 6, component: <Contact />, className: styles.li7 },
  
];


const Header1 = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

 
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };


  return (
    <header className={styles.header}>
       
     
      {isMenuVisible ? <Header menu={menu3} /> : <Header menu={menu1} />}
      <Hamburguer className={styles.li4}  onClick={toggleMenu} />
      
    </header>
  );
};


export default Header1;
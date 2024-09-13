import React, { useState } from 'react';
import Header from './Header';
import Works from "../Header/Works/Works";
import Blog from "../Header/Blog/Blog";
import Contact from "../Header/Contact/Contact";
import Hamburguer from "../Header/Hamburger/Hamburguer";
import Home from "../Header/Home/Home"
import styles from './header.module.css';


const menu2 = [
  { id: 15, component: <Home />, className: styles.li13},
  { id: 7, component: <Blog />, className: styles.li1 },
  { id: 8, component: <Works />, className: styles.li2 },
  { id: 9, component: <Contact />, className: styles.li3 },
 
];

const menu4 = [
  { id: 16, component: <Home />, className: styles.li14},
  { id: 10, component: <Blog />, className: styles.li5 },
  { id: 11, component: <Works />, className: styles.li6 },
  { id: 12, component: <Contact />, className: styles.li7 },
 
];

const Header2 = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

 
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };


  return (
    <header className={styles.header}>
       
     
      {isMenuVisible ? <Header menu={menu4} /> : <Header menu={menu2} />}
      <Hamburguer className={styles.li4}  onClick={toggleMenu} />
      
    </header>
  );
};
export default Header2;
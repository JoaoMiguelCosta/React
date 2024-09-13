import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import styles from "./blog.module.css"

function Blog () {

  const linkClass = location.pathname === '/blog' ? styles.BlogText2 : styles.BlogText;
  return (
    <li className={styles.blog}>
      <Link to="/blog"  className={linkClass}>Blog</Link>
    </li>
  );
}

export default Blog;
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.navbar}>
      <Link className={styles.link} to='/'>About</Link>
      <Link className={styles.link} to='/portfolio'>Portfolio</Link>
    </div>
  </div>
)

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';

const Header = () => (
  <div className={styles.navbar}>
    <Link to='/'>About</Link>
    <Link to='/portfolio'>Portfolio</Link>
  </div>
)

export default Header;

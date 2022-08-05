import React from 'react';
import { GiBlackBook, GiShoppingCart } from 'react-icons/gi';
import styles from '../Header/Header.module.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className={styles.logoItems}>
          <GiBlackBook style={{ width: '50px', height: '50px' }} />
          <span>book world</span>
        </div>
        <div>
          <GiShoppingCart style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default Header;

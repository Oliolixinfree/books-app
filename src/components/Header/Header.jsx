import React from 'react';
import { GiBlackBook, GiShoppingCart } from 'react-icons/gi';
import styles from '../Header/Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className={styles.logoItems}>
            <GiBlackBook style={{ width: '50px', height: '50px' }} />
            <span>book world</span>
          </div>
        </Link>
        <div>
          <Link to="/cart">
            <GiShoppingCart style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

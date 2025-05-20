import React, { useContext } from 'react';
import { AuthContext } from '../../context/createContext';

import logo from '../../assets/imgs/logo-semeq.svg';

import styles from './Navbar.module.css';

import { RiLogoutCircleRLine } from 'react-icons/ri';

import { Link } from 'react-router';

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <img src={logo} alt="Semeq" />
        </Link>
        <button className={styles.btnLogout} onClick={handleLogout}>
          <RiLogoutCircleRLine size={24} />
        </button>
      </div>

      <div className={styles.navbar}>
        <div className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/static">Static</Link>
          <Link to="/lubricants">Lubricants</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../contact/ContactForm';
import styles from './Header.css';

const Header = () => {
  return (
    <div className={styles.headerBox} >
      <div className={styles.desktopMenu}>
        <Link
          to={'/detail/service'}
          className={styles.hItem}>amp repair</Link>
        <Link
          to={'/detail/guitar'}
          className={styles.hItem}>guitar service</Link>
        <Link
          to={'/detail/overhaul'}
          className={styles.hItem} >overhaul</Link>
        <Link
          to={'/detail/restoration'}
          className={styles.hItem}>restoration</Link>
        <Link
          to={'/detail/modification'}
          className={styles.hItem}>modification</Link>
        <Link
          to={'/gallery/amphead'}
          className={styles.hItem}>gallery</Link>
        <Link
          to={'/lanham'}
          className={styles.hItem}>LANHAM AMPS</Link>
      </div>
      <div className={styles.mobileMenu}>
        <input
          type="checkbox"
          className={styles.toggler}
        >
        </input>
        <div className={styles.hamburger}><div></div></div>
        <div className={styles.menu}>
          <div>
            <div>
              <ul>
                <li>
                  <Link
                    to={'/detail/service'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                      amp repair
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/detail/guitar'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                      guitar service
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/detail/overhaul'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                      overhaul
                  </Link>
                </li>
                <li><Link
                  to={'/detail/restoration'}
                  className={styles.link}
                  style={{ textDecoration:'none' }}>
                      restoration
                </Link>
                </li>
                <li>
                  <Link
                    to={'/detail/modification'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                       modification
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/gallery/amphead'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                       gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/lanham'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                        LANHAM AMPS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <div className={styles.headerBox} >
      <div className={styles.desktopMenu}>
        <p className={styles.hItem}>amp repair</p>
        <p className={styles.hItem}>guitar service</p>
        <p className={styles.hItem} >overhaul</p>
        <p className={styles.hItem}>restoration</p>
        <p className={styles.hItem}>modification</p>
        <p className={styles.hItem}>gallery</p>
        <p className={styles.hItem}>LANHAM AMPS</p>
      </div>
      <div className={styles.mobileMenu}>
        <input type="checkbox" className={styles.toggler}></input>
        <div className={styles.hamburger}><div></div></div>
        <div className={styles.menu}>
          <div>
            <div>
              <ul>
                <li>
                  <Link
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                      amp repair
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                      guitar service
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                      overhaul
                  </Link>
                </li>
                <li><Link
                  className={styles.link}
                  style={{ textDecoration:'none' }}>
                      restoration
                </Link>
                </li>
                <li>
                  <Link
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                       modification
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                       gallery
                  </Link>
                </li>
                <li>
                  <Link
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

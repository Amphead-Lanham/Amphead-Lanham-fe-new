import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderLanham.css';

const Header = () => {
  return (
    
    <div className={styles.headerBox} >
      <div className={styles.desktopMenu}>
        <Link
          to={'/lanham/models'}
          className={styles.hItem} >models</Link>
        <Link
          to={'/detail/restoration'}
          className={styles.hItem}>about</Link>
        <Link
          to={'/detail/modification'}
          className={styles.hItem}>gallery</Link>
        <Link
          to={'/gallery'}
          className={styles.hItem}>contact</Link>
        <Link
          to={'/'}
          className={styles.hItem}>AMPHEAD</Link>
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
                    to={'/detail/overhaul'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                      models
                  </Link>
                </li>
                <li><Link
                  to={'/detail/restoration'}
                  className={styles.link}
                  style={{ textDecoration:'none' }}>
                      about
                </Link>
                </li>
                <li>
                  <Link
                    to={'/detail/modification'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                       gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/gallery'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                       contact
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                        AMPHEAD
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

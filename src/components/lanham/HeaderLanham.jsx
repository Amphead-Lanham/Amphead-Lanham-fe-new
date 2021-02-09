import React from 'react';
import { Link } from 'react-router-dom';
import PopUp from '../contact/PopUp';
import styles from './HeaderLanham.css';

const Header = () => {
  return (
    
    <div className={styles.headerBox} >
      <div className={styles.desktopMenu}>
        <Link
          to={'/lanham/models'}
          className={styles.hItem}
        >models
        </Link>
        <div
          onClick={() => window.location.replace('/lanham#about-section')}
          className={styles.hItem}
        >about
        </div>
        <Link
          to={'/gallery/lanham'}
          className={styles.hItem}
        >gallery
        </Link>
        <div
          className={styles.hItem}>
          <PopUp
            side={'lanham'}
            formId={'lanham'}
          />
        </div>
        <Link
          to={'/'}
          className={styles.hItem}>AMPHEAD
        </Link>
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
                    to={'/lanham/models'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                      models
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/detail/restoration'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                      about
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/gallery/lanham'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                       gallery
                  </Link>
                </li>
                <li>
                  <div  className={styles.lanhamPop} >
                    <PopUp
                      side={'lanham'}
                      formId={'lanham-mobile'}
                      className={styles.lanhamPop}
                    />
                  </div>
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

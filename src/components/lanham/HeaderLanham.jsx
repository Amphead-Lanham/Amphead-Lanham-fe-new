import React from 'react';
import { Link } from 'react-router-dom';
import PopUp from '../contact/PopUp';
import styles from './HeaderLanham.css';
import PropTypes from 'prop-types';

const HeaderLanham = ({ forHome }) => {
  return (
    
    <div className={forHome ? styles.headerBox 
      : styles.headerNonHome} >
      <div className={styles.desktopMenu}>
        {forHome &&
        <>
          <Link
            to={'/lanham/models'}
            className={styles.hItem}
          >models
          </Link>
          <a
            // onClick={() => window.location.replace('#about-section')}
            href={'#about-section'}
            className={styles.hItem}
          >about
          </a>
        </>
        }
        {!forHome &&
        <Link 
          to={'/lanham'}
          className={styles.hItem}
        >Home
        </Link>
        }
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
                  <Link to={'/lanham'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                    home
                  </Link>
                </li>
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

HeaderLanham.propTypes = {
  forHome: PropTypes.bool
};

export default HeaderLanham;

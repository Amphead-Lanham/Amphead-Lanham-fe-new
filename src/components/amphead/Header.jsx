import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import PropTypes from 'prop-types';

const Header = ({ isHome }) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(true);
  };

  const handleInVisible = () => {
    setVisible(false);
  };

  return (
    <div className={styles.headerBox} >
      <div className={styles.desktopMenu}>
        
        <div className={visible 
          ? styles.serviceMenu
          : styles.hidden}>
          <div  
            onClick={handleInVisible} 
            className={styles.hItem}>X</div>
          <Link
            to={'/detail/service'}
            className={styles.hItem}
            onClick={() => setVisible(false)}
          >amp repair</Link>
          <Link
            to={'/detail/guitar'}
            className={styles.hItem}
            onClick={() => setVisible(false)}
          >guitar service</Link>
          <Link
            to={'/detail/overhaul'}
            className={styles.hItem}
            onClick={() => setVisible(false)}
          >overhaul</Link>
          <Link
            to={'/detail/restoration'}
            className={styles.hItem}
            onClick={() => setVisible(false)}
          >restoration</Link>
          <Link
            to={'/detail/modification'}
            className={styles.hItem}
            onClick={() => setVisible(false)}
          >modification</Link>
        </div>
        <div  onClick={handleVisible}
          className={!visible ? styles.hItem : styles.hidden}
        >services</div>
        <Link
          to={'/detail/gen-info'}
          className={!visible ? styles.hItem : styles.hidden}>
            general info</Link>
        { isHome &&
        <>
          <Link
            to={'/gallery/amphead'}
            className={!visible ? styles.hItem : styles.hidden}>gallery</Link>
          <a
            href={'https://www.instagram.com/jim_amphead/'}
            className={!visible ? styles.hItem : styles.hidden}>Instagram</a>
          <a
            href={'https://www.facebook.com/ampheadpdx'}
            className={!visible ? styles.hItem : styles.hidden}>Facebook</a>
        </>
        }
        {!isHome &&
        <Link 
          to={'/'}
          className={styles.hItem}
        >home</Link>
        }
        <Link
          to={'/lanham'}
          className={!visible ? styles.hItem : styles.hidden}>LANHAM AMPS</Link>
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
                  <Link to={'/'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}>
                    home
                  </Link>
                </li>
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
                    to={'/detail/gen-info'}
                    className={styles.link}
                    style={{ textDecoration:'none' }}
                  >general info
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

Header.propTypes = {
  isHome: PropTypes.bool
};

export default Header;

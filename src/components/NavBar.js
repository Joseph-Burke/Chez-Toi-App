import { NavLink } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import styles from './styles/NavBar.module.scss';
import icon from '../assets/house-icon.png';

library.add(fab);

const NavBar = () => {
  const accountLinks = localStorage.getItem('loggedInUserId') ? (
    <li>
      <a
        href="/"
        onClick={() => {
          localStorage.removeItem('loggedInUserId');
        }}
      >
        LOG OUT
      </a>
    </li>
  ) : (
    <>
      <li>
        <NavLink activeClassName={styles.active} to="/log_in">
          LOG IN
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/sign_up">
          SIGN UP
        </NavLink>
      </li>
    </>
  );

  return (
    <Col sm={2} className={styles['nav-column']} data-testid="nav-bar">
      <nav className={styles['nav-bar']}>
        <div className={styles['top-div']}>
          <img
            alt="A logo for the website. It depicts a colourful cartoon house"
            src={icon}
            className={styles.image}
            data-testid="logo"
          />

          <ul className={styles['nav-list']}>
            <li>
              <NavLink activeClassName={styles.active} to="/">
                BROWSE
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="/">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="/viewings">
                VIEWINGS
              </NavLink>
            </li>
            {accountLinks}
          </ul>
        </div>
        <div className={styles['bottom-div']}>
          <ul
            className={styles['social-links']}
            data-testid="social-media-list"
          >
            <li>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </li>
            <li>
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </li>
            <li>
              <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
            </li>
            <li>
              <FontAwesomeIcon icon={['fab', 'vimeo-v']} />
            </li>
            <li>
              <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
            </li>
          </ul>
          <small className={styles['copyright-info']} data-testid="copyright">
            &#169; 2015 PIAGGIO & C.S.P.A - P.I.V.A
          </small>
        </div>
      </nav>
    </Col>
  );
};

export default NavBar;

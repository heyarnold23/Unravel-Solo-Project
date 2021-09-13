import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import styles from './Navigation.module.css';
// import { RiHome3Line } from "react-icons/ri";
import LoginFormModal from '../LoginFormModal';
import Header from './Header';


function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
          <NavLink to="/signup" className={styles.signUpText}>SIGN UP</NavLink>
          <LoginFormModal/>
        </>
      );
    }
    return (
      <>
      <div className={styles.navBar}>
        <div className={styles.placeholder}>
          {/* <p>placeholder, maybe symbol</p> */}
        </div>
          <div className={styles.unravelDiv}>
            <Link exact to="/" className={styles.unravelText}>UNRAVEL</Link>
          </div>
          <div className={styles.links}>
            {isLoaded && sessionLinks}
          </div>
      </div>
      <Header />
      </>
    );
}

  export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import styles from './Navigation.module.css';
import { RiHome3Line } from "react-icons/ri";
import LoginFormModal from '../LoginFormModal';


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
          <LoginFormModal/>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      );
    }

    return (
      <ul>
        <li>
          <NavLink exact to="/"><RiHome3Line/></NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    );
}

  export default Navigation;

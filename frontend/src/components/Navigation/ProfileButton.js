import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { FiUser} from "react-icons/fi";
import styles from './ProfileButton.module.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
        <FiUser id={styles.profileButton} onClick={openMenu}/>
        {showMenu && (
            <div className={styles.popOut}>
              <span className={styles.account}>Account</span>
              <div className={styles.listing}>{user.username}</div>
              <div className={styles.listing}>{user.email}</div>
              <div className={styles.listing}>
                  <button className={styles.logOutButton} onClick={logout}>Log Out</button>
              </div>
            </div>
        )}
    </>
  );
}

export default ProfileButton;

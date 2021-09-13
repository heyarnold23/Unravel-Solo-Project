import { useState } from "react";
import { Modal } from '../../context/Modal';
import LoginForm from "./LoginForm";
import styles from './LoginForm.module.css';


function LoginFormModal(){
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span
        onClick={() => setShowModal(true)}
        className={styles.signText}
      >
        SIGN IN
      </span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  )
}

export default LoginFormModal

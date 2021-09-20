import { useState } from "react";
import { Modal } from '../../context/Modal';
import SignupFormPage from "./SignupFormPage";
import styles from './SignupForm.module.css'

function SignupFormModal(){
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span
        onClick={() => setShowModal(true)}
        className={styles.signText}
      >
        SIGN UP
      </span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupFormPage />
        </Modal>
      )}
    </>
  )
}

export default SignupFormModal

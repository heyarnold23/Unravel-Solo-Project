import { createContext, useState, useEffect, useContext, useRef } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export default function ModalProvider(props) {
//   const [favFruitId, setFavFruitId] = useState('1');
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
      setValue(modalRef.current);
    }, [])

  return (
    <>
        <ModalContext.Provider value={value}>
        {props.children}
        </ModalContext.Provider>
        <div ref={modalRef}/>
    </>
  );
}

export function Modal({onClose, children}) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id='modal'>
      <div id='modal-background' onClick={onClose}/>
      <div id='modal-content'>
        {children}
      </div>
    </div>,
    modalNode
  );
}

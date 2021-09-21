import React , {useContext} from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  const {isModalOpen, closeModal} = useGlobalContext();

  return <div className={`modal-overlay ${isModalOpen? 'show-modal' : null}`}>
      <div className='modal-container'>
        <div className='modal-header'><button onClick={closeModal} className='close-btn'><FaTimes/></button></div>
        <h3>modal content</h3>
      </div>
  </div>
}

export default Modal
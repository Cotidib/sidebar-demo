import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Home = () => {
  const {openSidebar, openModal} = useContext(AppContext);

  return <main>
      <button className='sidebar-btn' onClick={openSidebar}><FaBars/></button>
      <button className='modal-btn' onClick={openModal}>show modal</button>
  </main>
}

export default Home
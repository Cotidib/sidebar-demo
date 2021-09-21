import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return <aside className={`sidebar ${isSidebarOpen? 'show-sidebar' : null}`}>
      <div className='sidebar-header'>
        <span className='logo'>LOGO</span>
        <button onClick={closeSidebar} className='close-btn'><FaTimes/></button>
      </div>
      <div className='sidebar-content'>
        <ul className='links'>
          {
              links.map((link)=>{
                  const {id,url,text,icon}=link;
                  return <li key={id}><a className='link' href={url}>{icon} {text}</a></li>
              })
          }
        </ul>
        <ul className='social'>
          {
              social.map((link)=>{
                  const {id,url,icon}=link;
                  return <li key={id}><a href={url}>{icon}</a></li>
              })
          }
        </ul>
      </div>
  </aside>
}

export default Sidebar
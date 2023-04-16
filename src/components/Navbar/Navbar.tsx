import React, { FC } from 'react'
import './style.scss'
import { Logo, Login, } from '../../assets'
import LoginModal from '../LoginModal/LoginModal';

interface navbarProps {
  modalIsOpen: boolean,
    openModal: () => void;
    afterOpenModal: () => void;
    closeModal: () => void;
    subtitle: any
}
const Navbar: FC<navbarProps> = ({modalIsOpen, openModal, afterOpenModal,subtitle,closeModal}) => {
  
  
  return (
    <nav id='navbar'>
      <div className="left">
        <img src={Logo} alt="" />
        <span >LandRecord</span>
      </div>
      <div className="right">
        <ul className='nav-links'>
          <li className='nav-link'>
            <div className="ele">
              <img src={Login} alt="" />
              <span>ABOUT</span>
            </div>

          </li>
          <li className='nav-link'>
            <div className="ele">
              <img src={Login} alt="" />
              <span>CONTACT US</span>
            </div>
          </li>
          <li className='nav-link'>
            <div className="ele">
              <img src={Login} alt="" />
              <span onClick={openModal}>LOGIN</span>
              <LoginModal afterOpenModal={afterOpenModal} openModal={openModal}  modalIsOpen={modalIsOpen} closeModal={closeModal} subtitle={subtitle}/>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
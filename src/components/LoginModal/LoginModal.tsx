import React, { useState } from 'react'
import Modal from 'react-modal';
import './style.scss'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

interface loginModalProps {
    modalIsOpen: boolean,
    openModal: () => void;
    afterOpenModal: () => void;
    closeModal: () => void;
    subtitle: any
}
const LoginModal: React.FC<loginModalProps> = ({ modalIsOpen, afterOpenModal, closeModal, subtitle }) => {
    const [error, setError] = useState<string>();
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="header">
                <h2 className='heading' ref={(_subtitle) => (subtitle = _subtitle)}>Login With MetaMask</h2>
                <button onClick={closeModal}>&#10006;</button>
            </div>
             <div className="contain">
              <button className='login-btn'>Connect Wallet</button>
            
             </div>
             <div className="footer">
             <span className='error'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
              <span className='link'>Download MetaMask, <a href="https://metamask.io/download/">Click Here</a> </span>
             </div>
        </Modal>
    )
}

export default LoginModal
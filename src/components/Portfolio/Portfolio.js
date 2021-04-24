import React, {useRef} from "react";
import {
  FaTimes,
  FaGithubSquare,
} from 'react-icons/fa'
import Divider from '@material-ui/core/Divider';
import Modal from '../Modal/Modal'
import ModalTwo from '../Modal/ModalTwo'
import './Port.scss'

const Portfolio = () => {

  const modalRef = useRef();
  const modalRef2 = useRef();
  // const modalRef3 = useRef();

  const openModal = () => {
    console.log('working????')
    modalRef.current.openModal()
  };
  const openModal2 = () => {
    modalRef2.current.openModal();
  }
  // const openModal3 = () => {
  //   modalRef3.current.openModal();
  // }

  return (
    <div className='program-container'>
    <div className='program-header' id='portfolio'>
      <h1>PORTFOLIO</h1>
      <p>Check out my Github for other projects I've worked on.</p>
      <Divider/>
    </div>
    <div className='program-wrap'>
      <div className="card">
        <div className="card__image">
          <div className="blue-filter card-1-img">
            <button className="btn-reveal" onClick={openModal}>DETAILS</button>
            <button className="btn-reveal-2">REPO <FaGithubSquare className='btn-reveal-icon'/></button>
            <button className="btn-reveal-3">LIVE</button>
          </div>
        </div>
        <div className="price-title">
          <h2 className="card-title card-title-1">POWERHOUSE FITNESS</h2>
        </div>
      </div>
      <div className="card">
        <div className="card__image">
          <div className="blue-filter card-2-img">
            <button className="btn-reveal" onClick={openModal}>DETAILS</button>
            <button className="btn-reveal-2">REPO <FaGithubSquare className='btn-reveal-icon'/></button>
            <button className="btn-reveal-3">LIVE</button>
          </div>
        </div>
        <div className="price-title">
          <h2 className="card-title card-title-2">CHEEFA'S FRIED PIES</h2>
        </div>
      </div>
      <Modal ref={modalRef}>
        <button onClick={() => modalRef.current.close()}><FaTimes/></button>
        <h1>Individual Training</h1>
        <p>
          loremNostrud ipsum dolor culpa dolore nulla sunt ullamco laboris ad commodo deserunt. Amet magna sit cillum adipisicing voluptate ullamco duis cupidatat aliqua qui occaecat Lorem et ea. Ipsum amet ullamco voluptate cillum anim in velit quis ea aliquip fugiat nisi exercitation reprehenderit.
        </p>
      </Modal>
      <ModalTwo ref={modalRef2}>
        <button onClick={() => modalRef2.current.close()}><FaTimes/></button>
        <h1 className="modal-h1">Group Training</h1>
        <p className="modal-p">
          loremNostrud ipsum dolor culpa dolore nulla sunt ullamco laboris ad commodo deserunt. Amet magna sit cillum adipisicing voluptate ullamco duis cupidatat aliqua qui occaecat Lorem et ea. Ipsum amet ullamco voluptate cillum anim in velit quis ea aliquip fugiat nisi exercitation reprehenderit.
        </p>
      </ModalTwo>
    </div>
  </div>
  );
};

export default Portfolio;



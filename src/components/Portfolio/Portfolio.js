/* eslint-disable react/jsx-no-target-blank */
import React, {useRef} from "react";
import {
  FaTimes,
  FaGithubSquare,
} from 'react-icons/fa'
import logo1 from '../../images/powerhouse-logo.jpg'
import logo2 from '../../images/cfp-cover-1.jpg'
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
    <div className='program-container' id='portfolio'>
      <div className='program-header'>
        <h1>PORTFOLIO</h1>
        <p>Check out my Github for other projects I've worked on.</p>
        <Divider/>
      </div>
      <div className='program-wrap'>
        <div className="card">
          <div className="card__image">
            <div className="blue-filter card-1-img">
              <button className="btn-reveal" onClick={openModal}>DETAILS</button>
              <a href="https://github.com/mosesvk/Powerhouse_fitness" target="_blank"><button className="btn-reveal-2">REPO <FaGithubSquare className='btn-reveal-icon'/></button></a>
              <a href="http://powerhousefitness.store/" target="_blank"><button className="btn-reveal-3">LIVE</button></a>
            </div>
          </div>
          <div className="price-title">
            <h2 className="card-title card-title-1">POWERHOUSE FITNESS</h2>
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <div className="blue-filter card-2-img">
              <button className="btn-reveal" onClick={openModal2}>DETAILS</button>
              <a href="https://github.com/mosesvk/Portfolio" target="_blank"><button className="btn-reveal-2">REPO <FaGithubSquare className='btn-reveal-icon'/></button></a>
              <button className="btn-reveal-3" style={{display: 'none'}}>LIVE</button>
            </div>
          </div>
          <div className="price-title">
            <h2 className="card-title card-title-2">CHEEFA'S FRIED PIES</h2>
          </div>
        </div>
      <Modal ref={modalRef}>
        <button onClick={() => modalRef.current.close()} className="modal-button"><FaTimes/></button>
        {/* <h1>POWERHOUSE FITNESS</h1> */}
        <div className='img-div'>
          <img src={logo1} alt=''/>
        </div>
        <p>
          loremNostrud ipsum dolor culpa dolore nulla sunt ullamco laboris ad commodo deserunt. Amet magna sit cillum adipisicing voluptate ullamco duis cupidatat aliqua qui occaecat Lorem et ea. Ipsum amet ullamco voluptate cillum anim in velit quis ea aliquip fugiat nisi exercitation reprehenderit.
        </p>
      </Modal>
      <ModalTwo ref={modalRef2}>
        <button onClick={() => modalRef2.current.close()} className="modal-button"><FaTimes/></button>
        {/* <h1 className="modal-h1">Group Training</h1> */}
        <div className='img-div'>
          <img src={logo2} alt=''/>
        </div>
        <p className="modal-p">
          loremNostrud ipsum dolor culpa dolore nulla sunt ullamco laboris ad commodo deserunt. Amet magna sit cillum adipisicing voluptate ullamco duis cupidatat aliqua qui occaecat Lorem et ea. Ipsum amet ullamco voluptate cillum anim in velit quis ea aliquip fugiat nisi exercitation reprehenderit.
        </p>
      </ModalTwo>
    </div>
  </div>
  );
};

export default Portfolio;



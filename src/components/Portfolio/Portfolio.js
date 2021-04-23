import React, {useRef} from "react";
// import {Button} from '../ButtonElements'
import {
  FaLinkedin,
  FaGithub,
  FaTimes
} from 'react-icons/fa'
import {
  PortContainer,
  PortHeader,
  PortText,
  PortP,
  SocialWrap,
  SocialLink,
} from "./portfolioElements";
import portImgOne from '../../images/powerhouse.jpg';
import Divider from '@material-ui/core/Divider';
import Modal from '../Modal/Modal'
import ModalTwo from '../Modal/ModalTwo'
import ModalThree from '../Modal/ModalThree'
import './Port.css'

const Portfolio = (props) => {
  const {lightBg} = props

  const modalRef = useRef();
  const modalRef2 = useRef();
  const modalRef3 = useRef();

  const openModal = () => {
    console.log('working????')
    modalRef.current.openModal()
  };
  const openModal2 = () => {
    modalRef2.current.openModal();
  }
  const openModal3 = () => {
    modalRef3.current.openModal();
  }

  return (
    <>
      <PortContainer id="portfolio" lightBg={lightBg}>
        <PortHeader>
          <PortText>PORTFOLIO</PortText>
          <PortP>Check out my Github and LinkedIn accounts for other projects</PortP>
          <Divider variant="middle"/>
          <SocialWrap>
            <SocialLink
            href="https://www.linkedin.com/in/mosesvk/"
            target="_blank"
            colorHover="true"><FaLinkedin iconDark="true"/></SocialLink>
            <SocialLink 
            href="https://github.com/mosesvk"
            target="_blank"
            colorHover="true"><FaGithub iconDark="true"/></SocialLink>
          </SocialWrap>
        </PortHeader>
        <section id="portfolio" className="bg-light-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 portfolio-item">
                <button className="portfolio-link" onclick={openModal}>
                  <div class="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img src={portImgOne} className="img-responsive" alt="portImg" onclick={openModal}/>
                </button>
                <div className="portfolio-caption">
                  <h4>Powerhouse Fitness</h4>
                  <p className="text-muted">Web Development</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a href="home" className="portfolio-link" datatoggle="modal" onclick={openModal2}>
                  <div class="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" className="img-responsive" alt="portImg"/>
                </a>
                <div className="portfolio-caption">
                  <h4>Barz</h4>
                  <p className="text-muted">Web Development</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a href="home" className="portfolio-link" datatoggle="modal" onclick={openModal3}>
                  <div class="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" className="img-responsive" alt="portImg"/>
                </a>
                <div className="portfolio-caption">
                  <h4>Cheefa's Fried Pies</h4>
                  <p className="text-muted">Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Portfolio Modal 1 */}
        <Modal ref={modalRef}>
          <button onClick={() => modalRef.current.close()}><FaTimes/></button>
          <h1>Individual Training</h1>
          <p>
            loremNostrud ipsum dolor culpa dolore nulla sunt ullamco laboris ad commodo deserunt. Amet magna sit cillum adipisicing voluptate ullamco duis cupidatat aliqua qui occaecat Lorem et ea. Ipsum amet ullamco voluptate cillum anim in velit quis ea aliquip fugiat nisi exercitation reprehenderit.
          </p>
        </Modal>

        {/* Portfolio Modal 2  */}
        <ModalTwo ref={modalRef2}>
          <button onClick={() => modalRef2.current.close()}><FaTimes/></button>
          <h1 className="modal-h1">Group Training</h1>
          <p className="modal-p">
            loremNostrud ipsum dolor culpa dolore nulla sunt ullamco laboris ad commodo deserunt. Amet magna sit cillum adipisicing voluptate ullamco duis cupidatat aliqua qui occaecat Lorem et ea. Ipsum amet ullamco voluptate cillum anim in velit quis ea aliquip fugiat nisi exercitation reprehenderit.
          </p>
        </ModalTwo>

        {/* Portfolio Modal 3  */}
        <ModalThree ref={modalRef3}>
          <button onClick={() => modalRef2.current.close()}><FaTimes/></button>
          <h1 className="modal-h1">Group Training</h1>
          <p className="modal-p">
            loremNostrud ipsum dolor culpa dolore nulla sunt ullamco laboris ad commodo deserunt. Amet magna sit cillum adipisicing voluptate ullamco duis cupidatat aliqua qui occaecat Lorem et ea. Ipsum amet ullamco voluptate cillum anim in velit quis ea aliquip fugiat nisi exercitation reprehenderit.
          </p>
        </ModalThree>

      </PortContainer>
    </>
  );
};

export default Portfolio;


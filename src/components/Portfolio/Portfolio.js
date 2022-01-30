import React, {useRef} from "react";
import {
  FaTimes,
  FaGithubSquare,
  FaGithub,
  FaYoutube, 
  FaLinkedin,
  FaEye
} from 'react-icons/fa'
import {
  SocialWrap, 
  SocialLink
} from './portfolioElements.js'
import logo1 from '../../images/powerhouse-logo.jpg'
import logo2 from '../../images/CFP-cover.jpg'
import logo3 from '../../images/tetris-cover.jpg'
// import Youtube from 'react-youtube'
import Divider from '@material-ui/core/Divider'
import Modal from '../Modal/Modal'
import ModalTwo from '../Modal/ModalTwo'
import ModalThree from '../Modal/ModalThree'
import './Port.scss'

const Portfolio = () => {
  // const {videoId} = props

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
    <div className='program-container' id='portfolio'>
      <div className='program-header'>
        <h1>PORTFOLIO</h1>
        <p>Check out my Github for other projects I've worked on.</p>
        <Divider/>
        <SocialWrap>
          <SocialLink
          href="https://www.linkedin.com/in/mosesvk/"
          target="_blank"
          ><FaLinkedin iconDark="true"/></SocialLink>
          <SocialLink
          href="https://github.com/mosesvk"
          target="_blank"
          ><FaGithub iconDark="true"/></SocialLink>
          <SocialLink
          href="https://www.youtube.com/channel/UChlB6LMekxCh917bjumDcCA"
          target="_blank"
          ><FaYoutube iconDark="true"/></SocialLink>
        </SocialWrap>
      </div>
      <div className='program-wrap'>

        <div className="card">
          <div className="card__image">
            <div className="blue-filter card-1-img">
              <button className="btn-reveal" onClick={openModal}>DETAILS</button>
              <a href="https://github.com/mosesvk/Powerhouse_fitness" target="_blank" rel="noreferrer"><button className="btn-reveal-2">REPO <FaGithubSquare className='btn-reveal-icon'/></button></a>
              <a href="http://powerhousefitness.store/" target="_blank" rel="noreferrer"><button className="btn-reveal-3">LIVE <FaEye className='btn-reveal-icon'/></button></a>
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
              <a href="https://github.com/mosesvk/Cheefas-fried-pies" target="_blank" rel="noreferrer"><button className="btn-reveal-2">REPO <FaGithubSquare className='btn-reveal-icon'/></button></a>
              <a href="https://cheefasfriedpies.herokuapp.com/" target="_blank" rel="noreferrer"><button className="btn-reveal-3">LIVE <FaEye className='btn-reveal-icon'/></button></a>
            </div>
          </div>
          <div className="price-title">
            <h2 className="card-title card-title-2">CHEEFA'S FRIED PIES</h2>
          </div>
        </div>

        <div className="card">
          <div className="card__image">
            <div className="blue-filter card-3-img">
              <button className="btn-reveal" onClick={openModal3}>DETAILS</button>
              <a href="https://github.com/DevMountain-tetris-friends/tetris-friends" target="_blank" rel="noreferrer"><button className="btn-reveal-2">REPO <FaGithubSquare className='btn-reveal-icon'/></button></a>
              <button className="btn-reveal-3" style={{display: 'none'}}>LIVE</button>
            </div>
          </div>
          <div className="price-title">
            <h2 className="card-title card-title-3">TETRIS FRIENDS</h2>
          </div>
        </div>

        <Modal ref={modalRef}>
          <button onClick={() => modalRef.current.close()} className="modal-button"><FaTimes/></button>
          {/* <h1>POWERHOUSE FITNESS</h1> */}
          <div className='img-div'>
            <img src={logo1} alt=''/>
            <div>
              <h4>Technologies Used</h4>
              <ul className="list-tech">
                <li>React</li>
                <li>Node.js</li>
                <li>PostgresSql</li>
                <li>Postman</li>
                <li>bcrypt.js</li>
                <li>Sass</li>
                <li>React Redux</li>
              </ul>
            </div>
          </div>
          <br/>
          <div className="modal-scroll">
            <h4>WHAT IS IT?</h4>
            <p>            Powerhouse Training is the place for high school and collegiate athletes to improve their skills and abiliies. It is a program specifically for lineman. It is a website that displays different drills, practices, and techniques to enhance skill. 
            </p>
            <h4>WHO IS IT FOR?</h4>
            <p>A friend of mine asked me to make a website for him a couple months ago. His business is growing and needed another way to connect to clients either than through social media.</p>
            <h4>WHEN & WHERE</h4>
            <p>The base of the project took 3 weeks during April 2021. This was done while studying at DevMountain. </p>
          </div>
          <div className="modal-buttons">
            <h4>CHECK IT OUT!</h4>
            <a href="https://github.com/mosesvk/Powerhouse_fitness" target="_blank" rel="noreferrer"><button >REPO <FaGithubSquare className='btn-reveal-icon'/></button></a>
            <a href="http://powerhousefitness.store/" target="_blank" rel="noreferrer"><button >LIVE<FaEye className='btn-reveal-icon'/></button></a>
            <a href="https://www.youtube.com/watch?v=wPCkDxDs0fQ" target="_blank" rel="noreferrer"><button >TOUR<FaYoutube className='btn-reveal-icon'/></button></a>
          </div>
        </Modal>

        <ModalTwo ref={modalRef2}>
          <button onClick={() => modalRef2.current.close()} className="modal-button"><FaTimes/></button>
          {/* <h1>POWERHOUSE FITNESS</h1> */}
          <div className='img-div'>
            <img src={logo2} alt=''/>
            <div>
              <h4>Technologies Used</h4>
              <ul className="list-tech">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Postman</li>
                <li>bcrypt.js</li>
                <li>Sass</li>
                <li>React Redux</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
          <br/>
          <div className="modal-scroll">
            <h4>WHAT IS IT?</h4>
            <p>Have a sweet tooth? Cheefa's Fried Pies will do the trick. Every week, there are different flavors from nutella banana to pizza fried pies.</p>
            <h4>WHO IS IT FOR?</h4>
            <p>This is a family business of which I wanted to help and create a website for.</p>
          </div>
          <div className="modal-buttons">
            <h4>CHECK IT OUT!</h4>
            <a href="https://github.com/mosesvk/cheefas-fried-pies" target="_blank" rel="noreferrer"><button>REPO <FaGithubSquare className='btn-reveal-icon'/></button></a>
            <a href="https://cheefasfriedpies.herokuapp.com/" target="_blank" rel="noreferrer"><button >LIVE<FaEye className='btn-reveal-icon'/></button></a>
          </div>
        </ModalTwo>
        <ModalThree ref={modalRef3}>
          <button onClick={() => modalRef3.current.close()} className="modal-button"><FaTimes/></button>
          <h2 style={{color:'red', textAlign:'center'}}>Website will be up Soon</h2>
          {/* <h1 className="modal-h1">Group Training</h1> */}
          <div className='img-div'>
            <img src={logo3} alt=''/>
            <div>
              <h4>Technologies Used</h4>
              <ul className="list-tech">
                <li>React</li>
                <li>Node.js</li>
                <li>PostgresSql</li>
                <li>Postman</li>
                <li>bcrypt.js</li>
                <li>Sass</li>
                <li>React Redux</li>
              </ul>
            </div>
          </div>
          <br/>
          <div className="modal-scroll">
            <h4>WHAT IS IT?</h4>
            <p>Tetris Friends is a game-based website where "gamers" can interact with eachother and play tetris. Each "gamer" can also see where their highest score ranks among other "gamers" 
            </p>
            <h4>WHO IS IT FOR?</h4>
            <p></p>
            <h4>WHEN & WHERE</h4>
            <p>The base of the project took 3 weeks during May 2021. This was done while studying at DevMountain. </p>
          </div>
          <div className="modal-buttons">
            <h4>CHECK IT OUT!</h4>
            <a href="https://github.com/mosesvk/Powerhouse_fitness" target="_blank" rel="noreferrer"><button >REPO <FaGithubSquare className='btn-reveal-icon'/></button></a>
            <a href="http://powerhousefitness.store/d" target="_blank" style={{display: 'none'}} rel="noreferrer"><button >LIVE<FaEye className='btn-reveal-icon'/></button></a>
          </div>
        </ModalThree>
      </div>
    </div>
  );
};

export default Portfolio;


// https://www.youtube.com/watch?v=wPCkDxDs0fQ
// https://youtu.be/wPCkDxDs0fQ
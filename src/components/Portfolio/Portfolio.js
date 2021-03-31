import React from "react";
// import {Button} from '../ButtonElements'
import {
  FaLinkedin,
  FaGithub
} from 'react-icons/fa'
import {
  PortContainer,
  PortHeader,
  PortText,
  PortP,
  SocialWrap,
  SocialLink,
  // PortWrap,
  // PortRow,
  // Column,
  // TextWrapper,
  // Heading,
  // Subtitle,
  // BtnWrap,
  // ImgWrap,
  // Img, 
  // Break
} from "./portfolioElements";
// import PortImgOne from '../../images/cfp-cover-1.jpg'
// import PortImgTwo from '../../images/barz-cover.jpg'
// import PortImgThree from '../../images/Port-img.jpeg'
import Divider from '@material-ui/core/Divider';
import './Port.css'

const Portfolio = ({
  lightBg,
  id, 
  imgStart,
  lightText,
  darkText, 
}) => {
  return (
    <>
      <PortContainer id="portfolio" lightBg={lightBg}>
        <PortHeader>
          <PortText>PORTFOLIO</PortText>
          <PortP>Check out my Github and LinkedIn accounts for my other projects on React and JavaScripts.</PortP>
          <Divider variant="middle"/>
          <SocialWrap>
            <SocialLink colorHover="true"><FaLinkedin iconDark="true"/></SocialLink>
            <SocialLink colorHover="true"><FaGithub iconDark="true"/></SocialLink>
          </SocialWrap>
        </PortHeader>
        <section id="portfolio" className="bg-light-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a href="#portfolioModal1" className="portfolio-link" datatoggle="modal">
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
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a href="home" className="portfolio-link" datatoggle="modal">
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
                <a href="home" className="portfolio-link" datatoggle="modal">
                  <div class="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" className="img-responsive" alt="portImg"/>
                </a>
                <div className="portfolio-caption">
                  <h4>Milovales</h4>
                  <p className="text-muted">Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Portfolio Modal 1 */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                  <div className="modal-body">
                    <h2>Cheefa's Fried Pies</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur</p>
                    <img className="img-responsive" src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" alt=""/>
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <p>
                    <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.
                    </p>
                    <ul class="list-inline">
                      <li>Date: July 2014</li>
                      <li>Client: Round Icons</li>
                      <li>Category: Graphic Design</li>
                    </ul>
                    <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </PortContainer>
    </>
  );
};

export default Portfolio;


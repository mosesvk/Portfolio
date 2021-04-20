import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import MainSection from '../components/Main/MainSection'
import Portfolio from '../components/Portfolio/Portfolio'
import Skills from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <MainSection />
      <Portfolio modalOpen={modalOpen} toggleModal={toggleModal}/>
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home

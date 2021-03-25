import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import MainSection from '../components/Main/MainSection'
import Portfolio from '../components/Portfolio/Portfolio'
import Skills from '../components/Skills/Skills'
import Footer from '../components/Footer/Footer'


const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <MainSection />
      <Portfolio/>
      <Skills />

      <Footer />
    </>
  )
}

export default Home

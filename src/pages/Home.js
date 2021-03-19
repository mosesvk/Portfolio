import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import MainSection from '../components/Main/MainSection'
import Portfolio from '../components/Portfolio/Portfolio'
import { PortCardOne, PortCardTwo } from '../components/Portfolio/PortData'

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
      <Portfolio {...PortCardOne}/>
    </>
  )
}

export default Home

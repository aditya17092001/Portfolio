import { useEffect, useRef, useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Footer from './components/Footer'
import MNavbar from './components/Mobile/MNavbar'
import MHome from './components/Mobile/MHome'
import MAbout from './components/Mobile/MAbout'
import MSkills from './components/Mobile/MSkills'
import MEducation from './components/Mobile/MEducation'
import MProject from './components/Mobile/MProject'
import MContact from './components/Mobile/MContact'
import MFooter from './components/Mobile/MFooter'

gsap.registerPlugin(ScrollToPlugin);

function App() {

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // const scrollToHome = () => homeRef.current.scrollIntoView({ behavior: 'smooth' });
  // const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  // const scrollToEducation = () => educationRef.current.scrollIntoView({ behavior: 'smooth' });
  // const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  // const scrollToSkills = () => skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  // const scrollToContacts = () => contactRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToHome = () => gsap.to(window, { duration: 2, scrollTo: homeRef.current });
  const scrollToAbout = () => gsap.to(window, { duration: 2, ease: "back.inOut", scrollTo: aboutRef.current });
  const scrollToEducation = () => gsap.to(window, { duration: 2, ease: "back.inOut", scrollTo: educationRef.current });
  const scrollToProjects = () => gsap.to(window, { duration: 2, ease: "back.inOut", scrollTo: projectsRef.current });
  const scrollToSkills = () => gsap.to(window, { duration: 2, ease: "back.inOut", scrollTo: skillsRef.current });
  const scrollToContacts = () => gsap.to(window, { duration: 2, ease: "back.inOut", scrollTo: contactRef.current });

  return (
    <div className='min-h-screen bg-gray-900 text-white'>

      {windowDimensions.width <= 500 || windowDimensions.height <= 600 ?
      <div>
        <MNavbar scrollToHome={scrollToHome} scrollToAbout={scrollToAbout} scrollToEducation={scrollToEducation} scrollToProjects={scrollToProjects} scrollToSkills={scrollToSkills} scrollToContacts={scrollToContacts}/>
        <MHome ref={homeRef}/>
        <MAbout ref={aboutRef}/>
        <MSkills ref={skillsRef}/>
        <MEducation ref={educationRef}/>
        <MProject ref={projectsRef}/>
        <MContact ref={contactRef}/>
        <MFooter scrollToHome={scrollToHome}/>
      </div> :
      <div>
        <Navbar scrollToHome={scrollToHome} scrollToAbout={scrollToAbout} scrollToEducation={scrollToEducation} scrollToProjects={scrollToProjects} scrollToSkills={scrollToSkills} scrollToContacts={scrollToContacts}/>
        <Home ref={homeRef}/>
        <About ref={aboutRef}/>
        <Skills ref={skillsRef}/>
        <Education ref={educationRef}/>
        <Projects ref={projectsRef}/>
        <Contact ref={contactRef}/>
        <Footer scrollToHome={scrollToHome}/>
      </div>}
    </div>
  )
}

export default App

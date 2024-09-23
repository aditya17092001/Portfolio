import { useRef } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToHome = () => homeRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToEducation = () => educationRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToSkills = () => skillsRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
    {/* // <div className='min-h-screen '> */}
      <Navbar scrollToHome={scrollToHome} scrollToAbout={scrollToAbout} scrollToEducation={scrollToEducation} scrollToProjects={scrollToProjects} scrollToSkills={scrollToSkills}/>
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <Skills ref={skillsRef}/>
      <Education ref={educationRef}/>
      <Projects ref={projectsRef}/>
    </div>
  )
}

export default App

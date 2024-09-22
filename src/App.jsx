import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar/>
      <Home />
      <About />
    </div>
  )
}

export default App

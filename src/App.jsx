import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import TopContainer from './Components/TopContainer/TopContainer'
import Skills from './Components/Skills/Skills'
import ProjectContainer from './Components/ProjectContainer/ProjectContainer'
import Experience from './Components/Experience/Experience'
import Contact from './Components/ContactMe/Contact'


const App = () => {
  return (
    <>
    <Header/>
    <TopContainer/>
    <Skills/>
    <ProjectContainer/>
    <Experience/>
    <Contact/>
  </>
  )
}

export default App
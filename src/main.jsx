import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home/Home.jsx'
import './index.css'
import Navbar from './component/Navbar.jsx'
import About from './About/About.jsx'
import ServicesApp from './Services/ServicesApp.jsx'
import SkillsToolsApp from './Skills&Tools/SkillsToolsApp.jsx'
import ProjectsApp from './Projects/ProjectsApp.jsx'
import SertifikatApp from './Sertifikat/SertifikatApp.jsx'
import Footer from './Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Navbar/>
    <About/>
    <ServicesApp/>
    <SkillsToolsApp/>
    <ProjectsApp/>
    <SertifikatApp />
    <Footer/>
  </StrictMode>,
)

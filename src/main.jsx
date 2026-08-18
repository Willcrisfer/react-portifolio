import ReactDOM from 'react-dom/client'
import HomePage from './pages/home/HomePage.jsx'
import Header from './components/header/Header.jsx'
import About from './pages/about/About.jsx'
import Gallery from './pages/gallery/Gallery.jsx'
import Projects from './pages/projects/Projects.jsx'
import Skills from './pages/skills/Skills.jsx'
import Footer from './components/footer/Footer.jsx'
import "./css/extends.css"
import './index.css'


import { ProfileProvider } from './context/ProfileContext.jsx'
import { ThemeProvider } from './context/SwitchTheme.jsx'


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage />
        <About />
        <Gallery />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ThemeProvider>
    <ProfileProvider>
       <Layout />
    </ProfileProvider> 
  </ThemeProvider >
)


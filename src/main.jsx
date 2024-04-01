import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home/HomePage.jsx'
import Header from './components/header/Header.jsx'
import About from './pages/about/About.jsx'
import Projects from './pages/projects/Projects.jsx'
import Skills from './pages/skills/Skills.jsx'
import Footer from './components/footer/Footer.jsx'
import "./css/extends.css"
import './index.css'


import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ProfileProvider } from './context/ProfileContext.jsx'
import { ThemeProvider } from './context/SwitchTheme.jsx'


const Layout = () => {
  return (
    <>
      <Header />
        <Outlet/>
      <Footer />
    </>
  
  )
}


const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage/>
          // errorElement: <Error />,
          // }
        },
        {
          path: '/About',
          element: <About />
          // errorElement: <Error />,
          // }
        },
        {
          path: '/Projects',
          element: <Projects />
          // errorElement: <Error />,
          // }
        },
        {
          path: '/Skills',
          element: <Skills />
          // errorElement: <Error />,
          // }
        }
      ]
    }
  ]
);


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ThemeProvider>
    <ProfileProvider>
       <RouterProvider router={router} />
    </ProfileProvider> 
  </ThemeProvider >
)


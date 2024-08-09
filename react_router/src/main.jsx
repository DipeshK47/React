import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'user/:userid',
        element: <User />
      },
      {
        
        path: 'github',
        element: <Github />,
        loader: githubInfoLoader
      }
    ]
  }
])

// EASIER WAY for ROUTER

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='home' element={<Home />}>
//       <Route path='about' element={<About />}>
//       <Route path='contact' element={<Contact />}>
//     </Route>
//   )
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

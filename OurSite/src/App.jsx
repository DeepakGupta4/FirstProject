import React from 'react'
import Navbar from './Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from '../Products'



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
 
  {
    path: "/product",
    element: (
      <div>
        <Navbar />
        <Products />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
      </div>
    ),
  },


])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Products from './Components/Products'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {
  let route = createBrowserRouter([{
    path: '/',
   element: <div>
     <Navbar />
     <Home />
     <Footer />
    </div>
  },
  {
    path: '/products',
    element: <div>
      <Navbar />
      <Products />
      <Footer />
    </div>
  },
   {
    path: '/about',
    element: <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  },
   {
    path: '/contact',
    element: <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  }
])

  return (
    <>
    <div>
    <RouterProvider router={route} />
    </div>
    </>
  )
}

export default App
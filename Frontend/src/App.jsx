import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Products from './Components/Products'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {
  let route = createBrowserRouter([{
    path: '/',
   element: <div>
     <Navbar />
     <Home />
    </div>
  },
  {
    path: '/products',
    element: <div>
      <Navbar />
      <Products />
    </div>
  },
   {
    path: '/about',
    element: <div>
      <Navbar />
      <About />
    </div>
  },
   {
    path: '/contact',
    element: <div>
      <Navbar />
      <Contact />
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
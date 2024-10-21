import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import GitHub from './components/GitHub/GitHub';
import ContactUs from './components/ContactUs/ContactUs';
import User from './components/User/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "github",
        element: <GitHub />
      },
      {
        path: "contact",
        element: <ContactUs />
      },
      {
        path: 'user/:id',
        element: <User />
      },
    ]
  }
])

// this one didn't work for me but you can use this way too:

// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<ContactUs/>}/>
//       <Route path='github' element={<GitHub/>}/>
//     </Route>
//   )
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

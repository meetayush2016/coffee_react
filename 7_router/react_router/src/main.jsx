import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom';
import './index.css'
import { RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import GitHub from './components/GitHub/GitHub';



// const router  = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>

//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:id' element={<User/>} />
      <Route path='github' element={<GitHub/>}   />
      // we 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

{/*
  import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
*/}
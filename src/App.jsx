import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Notfound from './Notfound'


function App() {
  
       
    let routes = createBrowserRouter([
      {path:'/',element:<Layout></Layout>,children:[
        {index:true,element:<Home></Home>},
        {path:'/about',element:<About></About>},
        {path:'/portfolio',element:<Portfolio></Portfolio>},
        {path:'contact',element:<Contact></Contact>},
        {path:'*',element:<Notfound></Notfound>}
    ]}
    ])
  return (
    <>
    <RouterProvider router={routes} > </RouterProvider>
     
    </>
  )
}

export default App

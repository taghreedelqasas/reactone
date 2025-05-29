import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
     <nav className="navbar navbar-expand-sm position-sticky top-0  w-100   py-4" data-bs-theme="dark">
  <div className="container">
    <NavLink className="navbar-brand text-uppercase"  to={'/'} >Start Framework</NavLink>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item">   
        <NavLink className="nav-link " to={'/about'}  style={{fontWeight:700}}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/portfolio'}  style={{fontWeight:700}}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/contact'}  style={{fontWeight:700}}>CONTACT</NavLink>
        </li>
       
     
      </ul>
    
    </div>
  </div>
</nav>

        

        <Outlet/>
        <div className=' foot  py-4'>
      <div className="container py-5">
        <div className="row gy-4">
           <div className="col-md-4">
            <div className="inner  text-white text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
           </div>
           <div className="col-md-4">
            <div className="inner  text-white text-center">
                <h3>AROUND THE WEB</h3>
               <div className="social  d-flex justify-content-center gap-2">
            
           <span> <i className="fa-brands fa-facebook"  /></span>
           <span>  <i className="fa-brands fa-twitter"  /></span>
            <span> <i className="fa-brands fa-linkedin"  /></span>
             <span><i className="fa-solid fa-globe"  /></span>
        </div>

               </div>
              
            </div>
           <div className="col-md-4">
            <div className="inner  text-white text-center">
                <h3>AROUND THE WEB</h3>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

               </div>
              
            </div>
           </div>
        
        </div>
      </div>
  <div className="final py-3 text-white">
    <p>Copyright © Your Website 2021</p>
  </div>
        </div>
   
  )
}

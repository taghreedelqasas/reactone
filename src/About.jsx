import React from 'react'

export default function About() {
  return (
    <div   className='about  text-white  '>
   <h2  className='h1  text-uppercase '>about component</h2>
   <div className='  d-flex align-items-center   justify-content-center m-4'>
        <div  className='line'>         
        </div>
        <div>
        <i className="fa-solid fa-star" style={{color: '#ffffff'}} />
        </div>
        <div className='line'>
        </div>
       </div>
   <div className="container " >
    <div className="row text-start">
        <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
    </div>
   </div>


    </div>
  )
}

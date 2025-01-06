import React from 'react'
import userfaceimg from "../images/avataaars.svg"

export default function Home() {
  return (
    <div className='home  text-white   '>
       <img     src={userfaceimg}  alt='logo'/>
       <h1  className='text-uppercase  text-white pt-5'>start Framework</h1>
       <div className='  d-flex align-items-center   justify-content-center m-4'>
        <div  className='line'>         
        </div>
        <div>
        <i className="fa-solid fa-star" style={{color: '#ffffff'}} />
        </div>
        <div className='line'>
        </div>
       </div>
       <p className='m-3 pb-2'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}

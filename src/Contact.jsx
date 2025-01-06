import React from 'react'

export default function Contact() {
  return (
    <div  className='contact '>
      <h2 className=' text-uppercase'>conatct section</h2>
        <div className='  d-flex align-items-center   justify-content-center m-4'>
        <div  className='line'>         
        </div>
        <div>
        <i className="fa-solid fa-star"  />
        </div>
        <div className='line'>
        </div>
       </div>
       
        <div className="  container">
         <div className="row gy-4  ">
          <div className="col-md-12">
          <div className="inner">
             <input    type='text' placeholder='userName' className='w-100   '/>
            </div>
          </div>
          <div className="col-md-12">
          <div className="inner">
             <input    type='text' placeholder='userAge' className='w-100   '/>
            </div>
          </div>
          <div className="col-md-12">
          <div className="inner">
             <input    type='email' placeholder='userEmail' className='w-100   '/>
            </div>
          </div>
          <div className="col-md-12">
          <div className="inner">
             <input    type='password' placeholder='userPassword' className='w-100   '/>
            </div>
          </div>

          <button className='btn text-white  ms-2'>send Message</button>
         </div>

        </div>

        </div>
  )
}

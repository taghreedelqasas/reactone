import React, { useEffect, useState } from 'react'
import img1 from "../images/poert1.png"
import img2 from '../images/port2.png'
import img3 from '../images/port3.png'

export default function Portfolio() {
  
 let [selectedImg,setSelectedImg] = useState(null);
 

  const handleImg =(src)=> {setSelectedImg(src);
    console.log(selectedImg)
    console.log(src)
} 



  const closehandle = ()=>{
    setSelectedImg(null);
  }

  return (
   
    <div className='portfolio '>
        <h2 className=' text-uppercase'>portfolio component</h2>
        <div className='  d-flex align-items-center   justify-content-center m-4'>
        <div  className='line'>         
        </div>
        <div>
        <i className="fa-solid fa-star"  />
        </div>
        <div className='line'>
        </div>
       </div>
       <div className="container">
        <div className="row gy-5">
            <div className="col-md-4">
           <div className="inner  " onClick={()=>handleImg(img1)}>
            <img  src={img1}  />
            <div className="imglay d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-plus"></i>

           </div>
           </div>
          
            </div>
            <div className="col-md-4">
           <div className="inner  "  onClick={()=>handleImg(img2)}>
            <img  src={img2}  />
            <div className="imglay d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-plus"></i>

           </div>
           </div>
          
            </div>
            <div className="col-md-4">
           <div className="inner  " onClick={()=>handleImg(img3)}>
            <img  src={img3}  />
            <div className="imglay d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-plus"></i>

           </div>
           </div>
          
            </div>
            <div className="col-md-4">
           <div className="inner  " onClick={()=>handleImg(img1)} >
            <img  src={img1}  />
            <div className="imglay d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-plus"></i>

           </div>
           </div>
          
            </div>
            <div className="col-md-4">
           <div className="inner  " onClick={()=>handleImg(img2)}>
            <img  src={img2}  />
            <div className="imglay d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-plus"></i>

           </div>
           </div>
          
            </div>
            <div className="col-md-4">
           <div className="inner  " onClick={()=>handleImg(img3)}>
            <img  src={img3} />
            <div className="imglay d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-plus"></i>

           </div>
           </div>
          
            </div>

        </div>
       </div>
      {selectedImg!==null?<div className="display  d-flex  justify-content-center align-items-center"  onClick={closehandle}>
         <img className='fixedImg'  src={selectedImg} alt='selected-img'  onClick={(e)=>e.stopPropagation()}/>
       </div>:''}
    </div>
  )
}



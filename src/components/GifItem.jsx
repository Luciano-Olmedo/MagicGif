import React from 'react'

const GifItem = ({title,url}) => {
  
  return (
    
    <div className='card col-md-6 mt-5 ' >      
      <img  src={url } alt={title}   />

      <div className='card-body'>
      <h3 className="title">{title}</h3> 
      
      </div>
    </div>
    
  )
}

export default GifItem
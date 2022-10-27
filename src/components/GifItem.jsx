import React from 'react'

const GifItem = ({title,url}) => {
  
  return (
    <div className='col'>
    <div className='card  col-md-6 mt-5' >      
      <img src={url } alt={title}  className="card-img-top" />

      <div className='card-body'>
      <h3 className="card-title">{title}</h3> 
      
      </div>
    </div>
    </div>
  )
}

export default GifItem
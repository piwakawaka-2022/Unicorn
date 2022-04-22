import React from 'react'




function Wish (props) {
  const { title, description, img} = props.wishes


    return (
    
      <div className="each-wish" >
      <p className='wish-title'>{title}</p>
      <p>{description}</p>
      <img className='one-wish-img' src={img} />
      <br></br>
      </div>
    
    )
  }



export default Wish
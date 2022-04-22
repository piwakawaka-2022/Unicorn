import React from 'react'




function Wish (props) {
  const { title, description, img} = props.wishes


    return (
    
      <div className="each-wish" >
      <h2>{title}</h2>
      <h3>{description}</h3>
      <img src={img} />
      </div>
    
    )
  }



export default Wish
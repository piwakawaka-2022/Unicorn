import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
  

  

  return (
    <div className='home-container'>
      <Link to='/AllWishes'><h3 className='every-wish'>Every wish comes true</h3></Link>
      <br></br><br></br><br></br>
      <Link to='/addAWish'><button className='add-wish wish'>Add a wish</button></Link> 
      <button className='make-wish wish'>Make A Wish</button>
      <div className='unicorn-pic'></div>
      <div style={{ backgroundImage: "url(../public/images/unicorns/rainbow.png)" }}>
 
</div>
     
    </div>
  )
}

export default Home

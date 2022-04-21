import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
 

  return (
    <div className='home-container'>
      <Link to='allWishes'><h3 className='every-wish'>Every wish comes true</h3></Link>
      <Link to='/addAWish'><button className='add-wish wish'>Add a wish</button></Link> 
      <button className='make-wish wish'>Make A Wish</button>
     
    </div>
  )
}

export default Home

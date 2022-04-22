import React from 'react'
// import { fetchWishes } from '../api/wishes'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import OneWish from './OneWish'


const AllWishes = () => {

  const wishes = useSelector(globalState => globalState.wishes)
  console.log(wishes)

  return (
    <div>
      <div className='home-btn'>
        <Link to='/'><button className='add-wish wish'>Home</button></Link> 
      </div>
      <br></br>
      <br></br>
      <ul>
          {wishes.map((oneWish) => <OneWish key={oneWish.id} wishes={oneWish} />)}
          <br></br>
      </ul>
      {/* <img className='rainbow' src='/images/unicorns/rainbow.png' /> */}

        
    </div>
  )
}

export default AllWishes
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Home = () => {
  

  const wishes = useSelector(globalState => globalState.wishes)
  
  const [randomWish, setRandomWish] = useState('')
  const handleClick = () => {
    setRandomWish(wishes[Math.floor(Math.random() * wishes.length)])
  }

  return (
    <>
    <div className='background'>
      <div className='home-container'>
      <Link to='/AllWishes'><h3 className='every-wish'>Every wish comes true</h3></Link>
      <br></br><br></br><br></br>
      <Link to='/addAWish'><button className='add-wish wish'>Add a wish</button></Link> 
      <button className='make-wish wish' onClick={handleClick}>Make A Wish</button>
        {randomWish !== '' && <div className='wish-display'>
          <p className='wish-title'>{randomWish.title} </p>
          <p className='wish-description '>{randomWish.description}</p>
          <img className='main-wish' src={randomWish.img}/></div>}
      </div>
    </div>
      <img className='unicorn05' src='/images/unicorns/unicorn05.png' />
      <img className='rainbow02' src='/images/unicorns/rainbow02.png' />
    <img className='unicorn04' src='/images/unicorns/unicorn04.png' />
    </>
  )
}

export default Home

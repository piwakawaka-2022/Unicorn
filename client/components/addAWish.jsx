// import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
// import { saveWish } from '../actions'
import { saveWishes } from '../api/wishes'
import { Link } from 'react-router-dom'

const AddAWish = () => {
  
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    img: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
   
    saveWishes(formData)
    setFormData({
      title: '',
      description: '',
      img: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


return (
<div className='background-img'>
   <div className='home-add-btn'>
         <Link to='/'><button className='add-wish wish'>Home</button></Link> 
   </div>
   <form onSubmit={handleSubmit}>
         <div className='title-input'>
         <label htmlFor='title'>Title:</label>
         <input id='title' name='title' value={formData.title} type='text' onChange={handleChange} />
         </div>
         <div className='description-input'>
         <label htmlFor='description'>Description:</label>
         <textarea id='description' name='description' type='text' value={formData.description} onChange={handleChange} rows='2' cols='50' />
         </div>
         <div className='img-input'>
         <label htmlFor='img'>Img URL:</label>
         <input id='img' name='img' type='text' value={formData.img} onChange={handleChange} className='imgUrl' />
         </div>
         <button className='addwish-btn wish'>Add your wish!</button>
         </form>
        
         {/* <img className='unicorn' src='/images/unicorns/unicorn.png' /> */}
</div>
)}



export default AddAWish
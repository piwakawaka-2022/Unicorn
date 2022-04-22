import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import AllWishes from './AllWishes'
import { getAllTheWishes } from '../actions'
import AddAWish from './AddAWish'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTheWishes())
})

  return (
    <>
    <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/allWishes' element={<AllWishes />}></Route>
       <Route path='/addAWish' element={<AddAWish />}></Route>
    </Routes>
    </>
  )
}

export default App

//button to get all wishes
  // - make api call to db 
  // -- change whats in the store/global state to one wish

  //display that global state

  // button to ADD wish
  // - route to the AllWishes page

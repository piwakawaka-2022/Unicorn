import React from 'react'
import { Routes, Route} from 'react-router-dom'
// import { getGreeting } from '../api/apiClient'
import Home from './Home'

const App = () => {
  // const [wish, setWish] = useState('')

  

  return (
    <>
    <Routes>
       <Route path='/' element={<Home />}></Route>
       {/* <Route path='/addAWish' element={<MakeAWish />}></Route> */}
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

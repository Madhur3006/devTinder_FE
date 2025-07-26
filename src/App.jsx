import './App.css'
import Body from './Body'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Login from './Login'

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route  path="/" element = {<Body />}> 
            <Route path = '/login' element = {<Login />}/>
            <Route path='/profile' element = {<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

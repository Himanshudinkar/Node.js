import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import DashBoard from './Pages/Dashboard'


function App() {


  return (
    <>
  
  <Routes>
    <Route path='/' element = {<Layout/>}>
    <Route index element = {<Home/>}/>
    <Route path='/home' element = {<Home/>} />
    <Route path='/login' element = {<Login/>} />
    <Route path='/registration' element = {<Registration/>} />
    <Route path='/dashboard' element = {<DashBoard/>} />
    </Route>
  </Routes>
        
    </>
  )
}

export default App

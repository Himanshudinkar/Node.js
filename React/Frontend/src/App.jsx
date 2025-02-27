import { BrowserRouter,Route,Routes,Outlet } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Insert from './Insert'
import Display from './Display'
import Home from './Home'
import Search from './Search'


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element = {<Home/>} />
        <Route path='home' element= {<Home/>}/>
        <Route path='insert' element = {<Insert/>}/>
        <Route path='display' element = {<Display/>}/>
        <Route path='search' element = {<Search/>}/>
        </Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App

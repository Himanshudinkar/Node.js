
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Insert from './Insert'
import Display from './Display'
import Home from './Home'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>}/>
         <Route path='/insert' element={<Insert/>}/>
     <Route path='/display' element={<Display/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

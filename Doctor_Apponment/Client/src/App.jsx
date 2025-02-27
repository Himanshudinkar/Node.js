import { Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import SearchDoctor from "./Pages/SearchDoctor"
import PatientAppointment from "./Pages/PatientAppointment"
import DoctorLogin from "./Pages/DoctorLogin"
import DoctorDashboard from "./Pages/DoctorDashboard"

function App() {
 

  return (
    <>

    <Routes>
      <Route path="/" element = {<Layout/>}>
      <Route index element = {<Home/>} />
      <Route path="/home" element = {<Home/>} />
      <Route path="/search" element = {<SearchDoctor/>}/>
      <Route path="/login" element = {<DoctorLogin/>}/>
      <Route path="/patappointment/:id" element = {<PatientAppointment/>} />
      </Route>
    </Routes>
      
      <Routes>
      <Route path="/dashboard" element = {<DoctorDashboard/>}>
      </Route>
    </Routes>
      
        
    </>
  )
}

export default App

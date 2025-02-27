import axios from "axios"
import './App.css'

function App() {
  
  const handleSubmit = async () =>{

    let api = "http://localhost:8000/employee"
    let res = await axios.get(api);
    console.log(res);
  }

   const handleSubmit1 = async () =>{

    let api = "http://localhost:8000/home"
    let res = await axios.get(api);
    console.log(res);
  }

  return (
    <>
      <h1>Welcome to Home</h1>
      <button onClick={handleSubmit1}>Home</button>
      <button>About</button>
      <button onClick={handleSubmit}>Services</button>
    </>
  )
}

export default App

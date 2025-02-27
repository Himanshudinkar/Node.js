import axios from "axios"
import './App.css'

function App() {
  
  

   const handleSubmit1 = async () =>{

    let api = "http://localhost:8000/home"
    
    try{
      let res = await axios.get(api);
       console.log(res);
    }
    catch(error){
     console.log(error)
    }
    
  }

  return (
    <>
      <h1>Welcome to Home</h1>
      <button onClick={handleSubmit1}>Home</button>
      <button>About</button>
      <button >Services</button>
    </>
  )
}

export default App

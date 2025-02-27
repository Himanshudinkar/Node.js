import { useState } from "react"
import axios from "axios"

const Insert = () =>{

    const [input,setInput] = useState({})

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
    }

    const finalSubmit = (e) =>{
        e.preventDefault();
        const api = "http://localhost:8000/user/insert";
        axios.post(api,input)
        .then((res)=>{alert("done")})
    }


    return(
        <>
       username : <input type="text" name="username" value={input.username} onChange={handleInput}/>
       <br />
       email : <input type="text" name="email" value={input.email} onChange={handleInput}/>
       <br />
      first name : <input type="text" name="firstname" value={input.firstname} onChange={handleInput}/>
      <br />
       last name : <input type="text" name="lastname" value={input.lastname} onChange={handleInput}/>
       <br />
       <button onClick={finalSubmit}>Submit</button>
        </>
    )
}

export default Insert
import { useState } from "react"
import axios from "axios"

const Insert = () =>{

    const [input, setInput] = useState({});


      const handleSubmit=()=>{
       let api="http://localhost:8080/students/datasave";
       axios.post(api, input).then((res)=>{
        console.log(res.data);
        alert("data save!")
       })
    }

    const handleinput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(input)
        setInput((key)=>{
            return {...key, [name]:value}
        })
    }

    return(
        <>


        
        <h1>Apllication Form</h1>
        Enter EmpNo : <input type="text" name="empno" onChange={handleinput}  />
        <br />
        Enter Name : <input type="text" name="name" onChange={handleinput} />
        <br />
        Enter Desgination : <input type="text" name="desig" onChange={handleinput} />
        <br />
        Enter Sallary : <input type="text" name="sall" onChange={handleinput} />
        <br />
        <button onClick={handleSubmit}>Click Me</button>



        </>
    )
}

export default Insert
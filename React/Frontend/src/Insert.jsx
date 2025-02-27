import { useState } from "react"
import axios from "axios"
const Insert = () =>{

    let [inputnam, setInputname] = useState({
        rollno:"",
        name:"",
        city:"",
        fees:""
    })
 
    const changeinp = (e)=>{
        let {name,value} = e.target;
        setInputname({
            ...inputnam,
            [name]:value
        })
    }

    const finalSubmit = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8080/student/save",inputnam)
        .then((res)=>{
            alert("insterted");
        })
        
        .catch((err)=>{
            alert("err");
        })
        
    }

    return(
        <>
        <form onSubmit={finalSubmit}>
            <label >EMP No.</label>
            <input type="text" name="rollno" value={inputnam.rollno} onChange={changeinp} /> <br /> <br />

            <label >EMP Name</label>
            <input type="text" name="name" value={inputnam.name} onChange={changeinp} /> <br /> <br />

             <label >Designation</label>
            <input type="text" name="city" value={inputnam.city} onChange={changeinp} /> <br /> <br />

            <label >Salary</label>
            <input type="text" name="fees" value={inputnam.fees} onChange={changeinp} /> <br /> <br />

            <button>Submit</button>
        </form>
        </>
    )
}

export default Insert
import axios from "axios"
import { useState } from "react"

const  Search = () =>{

    const [rno,setRno] = useState("");
    const [mydata, setMydata] = useState([]);

    const handleSubmit = () =>{
        let api = "http://localhost:8080/student/search";
        axios.post(api, {sturno:rno})
        .then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        })
    }

    const ans = mydata.map((key)=>{
        return(
            <>
            <h1>student name: {key.name}, city : {key.city}</h1>
            <h2>Rollno : {key.rollno}</h2>
            <h2>totle fees :{key.fees}</h2>
            </>
        )
    })

    return(
        <>
        <h1>Search Data</h1>
        <label>Enter Roll No</label>
        <input type="text" name="" value={rno} onChange={(e)=>{setRno(e.target.value)}}/>
        <button onClick={handleSubmit}>Search</button>
        <hr />
        {ans}
        
        </>
    )
}

export default Search
import axios from "axios"
import { useEffect, useState } from "react"

const Display = () =>{

    const [mydata, setMydata] = useState([]);

    const loadData = () =>{
        axios.get("http://localhost:8080/student/display")
        .then((res) =>{
            console.log(res.data)
            setMydata(res.data)
        })
    }

    useEffect(()=>{
        loadData();
        
    },[])

     let final = mydata.map((e,index)=>{return <>
    <tr key={index}> 
        <td >{e.rollno}</td> 
        <td >{e.name}</td> 
        <td >{e.city}</td> 
        <td >{e.fees}</td> 
    </tr>
    </>
    })

    return(
        <>
        <table border="1">
            <thead>
                <th>EMP NO</th>
                <th>EMP NAME</th>
                <th>DESIGNATION</th>
                <th>SALARY</th>
            </thead>

            <tbody>
                {final}
            </tbody>
        </table>
        </>
    )
}

export default Display
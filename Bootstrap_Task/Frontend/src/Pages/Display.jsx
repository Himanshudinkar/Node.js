import { useState } from "react"
import axios from "axios"
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Display = () =>{
    const [myname,setMyname] = useState([]);

    const loadData = () =>{
        let api = "http://localhost:8000/employee/display";
        axios.get(api)
        .then((res)=>{
            setMyname(res.data)
        })
    }


    useEffect(()=>{
        loadData();
    },[])

    let sno = 0;

    let ans = myname.map((key,index) =>{
        sno++;
        return(
            <>
            <tr key={index}>
                <td>{sno}</td>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.desig}</td>
                <td>{key.salary}</td>
            </tr>
            </>
        )
    })

    return(
        <>
        
        <h1 style={{textAlign:"center",paddingTop:"80px",paddingBottom:"80px"}}>Display page</h1>
         <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>EMP NO.</th>
                <th>EMP NAME</th>
                <th>EMP DESIGNATION</th>
                <th>EMP SALARY</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
      </Table>
        </>
    )
}

export default Display
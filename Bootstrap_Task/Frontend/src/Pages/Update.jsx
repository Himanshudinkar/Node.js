import { useState } from "react"
import axios from "axios"
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Update = () =>{
    const [myname,setMyname] = useState([]);
    const nav = useNavigate();

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


    const myDel = async (id) =>{
        let api = `http://localhost:8000/employee/delete/?empid=${id}`
        let response = await axios.get(api);
        message.success(response.data);
        loadData();
    }

    const myEdit = (id) =>{
        nav(`/edit/${id}`)
    }


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
                <td> <RiDeleteBin6Fill style={{cursor:"pointer"}} onClick={()=>{myDel(key._id)}} /></td>
                <td><FaEdit style={{cursor:"pointer"}}  onClick={()=>{myEdit(key._id)}} /></td>
            </tr>
            </>
        )
    })

    return(
        <>
        
        <h1 style={{textAlign:"center",paddingTop:"80px",paddingBottom:"80px"}}>Update  page</h1>
         <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>EMP NO.</th>
                <th>EMP NAME</th>
                <th>EMP DESIGNATION</th>
                <th>EMP SALARY</th>
                <th>DELETE</th>
                <th>UPDATE</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
      </Table>
        </>
    )
}

export default Update

import { useState, useEffect } from "react";
import axios from "axios";

 


const Display=()=>{

    let [stuData, setStuData]= useState([]);
   
    
    const loadData=async()=>{
       
        const api = "http://localhost:8000/user/display"
        let response = await axios.get(api)
        console.log(response.data)
        setStuData(response.data)
    
    }


    useEffect(()=>{
        loadData(); 
    }, []);

  

 let sno=0;
    const ans= stuData.map((key)=>{
        sno++;
        return(
            <>
              <tr>
                <td> {sno} </td>
                <td>{key.userid.username}</td>
                <td>{key.userid.email}</td>
                <td> {key.firstname} </td>
                <td> {key.lastname} </td>
                
              </tr> 
            </>
        )
    })
    return(
        <>
          <h1>Display Student Records</h1>
          <table border={2}>
      <thead>
        <tr>
          <th>#</th>
          <th>username</th>
          <th>email</th>
          <th>firstname</th>
          <th>lastname</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </table>
        </>
    )
}
export default Display
import axios from "axios";
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Search = () =>{

    const [val,setValue] = useState("");
    const [mydata,setMydata] = useState([]);

    const finalSubmit = async () =>{
        const api = "http://localhost:8000/employee/search";
        const response = await axios.post(api,{empno:val});
        console.log(response.data);
        setMydata(response.data);

    }

    let ans = mydata.map((key)=>{
        return(
            <>
            
             <Card style={{ width: '18rem' }}>
                <Card.Body>
                        <Card.Title>Emp no : {key.empno}</Card.Title>
                        <Card.Text>
                        <h3> Emp name :  {key.name}</h3>
                        <h3> Emp Designation :  {key.desig}</h3>
                        <h3> Emp Salary :  {key.salary}</h3>
                        </Card.Text>
                </Card.Body>
            </Card>
            
            </>
        )
    })



    return(
        <>

        <div className="searchops">
        
       <h1>Search Employee Data</h1>
       Enter Employee No: <input type="text" name="" value={val} onChange={(e)=>{setValue(e.target.value)}} />
       <button onClick={finalSubmit}>Search</button>

       {ans}
        </div>
        </>
    )
}

export default Search
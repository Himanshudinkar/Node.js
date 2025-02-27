import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
const Registration = () =>{

    let [inputname,setInputname] = useState({});

    const handleinput = (e) =>{

        let name = e.target.name;
        let value = e.target.value;

        setInputname((pre)=>({...pre,[name]:value}));


    }

    const handlesubmit = async(e) =>{
        e.preventDefault();

        let api = "http://localhost:8000/employee/insert";
        let response = await axios.post(api,inputname)
        console.log(response.data);
        try{
          alert("succesfull")
        }catch(error){
          alert("error")
        }

    }
    return(
        <>
        
        <h1 style={{textAlign:"center",marginTop:"20px"}}>Employee Registration Page</h1>

        <hr style={{border:"2px solid black"}} />

          <Form style={{width:"400px",margin:"auto",marginTop:"50px"}}>


        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" name='name' value={inputname.name} onChange={handleinput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='city' value={inputname.city} onChange={handleinput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='email' value={inputname.email} onChange={handleinput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={inputname.password} onChange={handleinput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>


        </>
    )
}

export default Registration
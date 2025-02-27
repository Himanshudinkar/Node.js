import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {message} from "antd"
const Insert = () =>{

    const [input,setInput] = useState({})

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
    }

    const finalSubmit = (e) =>{
        e.preventDefault();
        const api = "http://localhost:8000/employee/insert";
        axios.post(api,input)
        .then((res)=>{message.success("done")})
    }


    return(
        <>
        <div id='form'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Emp No.</Form.Label>
        <Form.Control type="text" name='empno' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Emp Name.</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation</Form.Label>
        <Form.Control type="text" name='desig' onChange={handleInput} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary.</Form.Label>
        <Form.Control type="text" name='salary' onChange={handleInput} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={finalSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Insert
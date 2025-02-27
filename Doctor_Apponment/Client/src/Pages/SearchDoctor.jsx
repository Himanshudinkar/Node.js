import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const SearchDoctor = () =>{

    let [input,setInput] = useState({});
    let [mydata,setMydata] = useState([]);

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput((values)=>({...values,[name]:value}));
        console.log(input);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        let api = (`${BASE_URL}/doctor/searchdoctor`);

        try {
            let response = await axios.post(api,input);
            console.log(response);
            setMydata(response.data);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    }

    let ans = mydata.map((key)=>{
        return(
            <>
            
            <tr>
                <td>{key.name}</td>
                <td>{key.specailization}</td>
                <td>{key.address}</td>
                <td>{key.city}</td>
                <td>{key.mobile}</td>
                <td>{key.email}</td>
            </tr>
            </>
        )
    })

    return(
        <>
        <div className="drcontent">
            <h1>We Have Specialist Doctors To Solve</h1>
            <h1>Your Problems</h1>
            <img src="https://wpthemesgrid.com/themes/medikit/img/section-img.png" alt="" />
            <p>Search Your Doctor</p>
         </div>

         <div className="forms">
             <Form>
     <Form.Group className="mb-3 insideform" controlId="formBasicEmail" >
        <Form.Label>Enter Doctor Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput} />
      </Form.Group>

          <Form.Group className="mb-3 insideform" controlId="formBasicEmail">
        <Form.Label>Select Specialization</Form.Label>
          <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
          <option>Open this select menu</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="ENT">ENT</option>
          <option value="Neuro Surgeon">Neuro Surgeon</option>
          <option value="Dentist">Dentist</option>
          <option value="Plastic Surgeon">Plastic Surgeon</option>
    </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" style={{marginTop:"14px",backgroundColor:"rgba(44, 117, 206, 0.64)"}} onClick={handleSubmit}>
        Search
      </Button>
    </Form>
         </div>


          <Table striped bordered hover style={{marginTop:"50px"}}>
      <thead>
        <tr>
          <th>NAME</th>
          <th>SPECIALITY</th>
          <th>ADDRESS</th>
          <th>CITY</th>
          <th>MOBILE NUMBER</th>
          <th>EMAIL</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
    </Table>
        </>
    )
}

export default SearchDoctor
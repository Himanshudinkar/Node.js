import { useState, } from "react";
import BASE_URL from "../config";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import form1 from "../assets/download.png"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const DoctorLogin = () =>{
   
    let [mydata,setMydata] = useState({});

    const navigate = useNavigate();

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setMydata((values)=>({...values,[name]:value}))
        console.log(mydata)

    }

    const handleSubmit = async () =>{

        let api =  (`${BASE_URL}/doctor/login`);
        try {
            let response = await axios.post(api,mydata);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("docid", response.data._id);
             toast.success("login succesfully");
             navigate("/dashboard")
        } catch (error) {
             toast.error(error.response.data.msg);
        }
    }
    return(
        <>
        <div  className="apoint">
            <h1>Doctor Login Form</h1>
            <img src="https://wpthemesgrid.com/themes/medikit/img/section-img.png" alt="" />
         </div>


            <div className="appform" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"20px",width:"900px",margin:"auto",marginTop:"50px"}}>
                <div className="form1">
                      <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleInput} />
      </Form.Group>
      <Button onClick={handleSubmit}> Register!</Button>
    </Form>
                </div>

                <div className="form2">
                    <img src={form1} alt="" style={{height:"400px"}} />
                </div>
            </div>
        
         <ToastContainer /> 
        
        </>
    )
}

export default DoctorLogin
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import BASE_URL from "../config";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import form1 from "../assets/form2.png"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const PatientAppointment = () =>{

    const {id} = useParams();

    let [docInfo,setDocInfo] = useState({});
    let [mydata,setMydata] = useState({});

    const loadData = async() =>{
        let api =  (`${BASE_URL}/patient/showdoctor?id=${id}`);

        try {
            let response = await axios.get(api);
            console.log(response);
            setDocInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        loadData();
    },[])


    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setMydata((values)=>({...values,[name]:value}))
        console.log(mydata)

    }

    const handleSubmit = async () =>{

        let api =  (`${BASE_URL}/patient/aptsave`);
        try {
            let response = await axios.post(api,{docid:id,...mydata});
             toast.success(response.data.msg);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <div  className="apoint">
            <h1>Patient Appointment Form</h1>
            <img src="https://wpthemesgrid.com/themes/medikit/img/section-img.png" alt="" />
            <h4>Your Doctor : {docInfo.name}</h4>
            <h4>{docInfo.specailization} Specialist</h4>
         </div>


            <div className="appform">
                <div className="form1">
                      <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Patient Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Disease</Form.Label>
        <Form.Control type="text" name="disease" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile no</Form.Label>
        <Form.Control type="text" name="mobile" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleInput} />
      </Form.Group>
      <Button onClick={handleSubmit}> Register!</Button>
    </Form>
                </div>

                <div className="form2">
                    <img src={form1} alt="" />
                </div>
            </div>
        
         <ToastContainer /> 
        </>
    )
}

export default PatientAppointment
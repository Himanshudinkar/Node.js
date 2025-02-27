import { useEffect, useState } from "react"
import BASE_URL from "../config";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
const Home = () =>{

    let [mydata,setMydata] = useState([]);

    const navigate = useNavigate();

    const loadData = async() =>{
       let api = (`${BASE_URL}/doctor/displaydata`);

       try {
        let response = await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
       } catch (error) {
        console.log(error.response.data.msg)
       }
    }

    useEffect(()=>{
        loadData();
    },[])


    const handleNavigate = (id)=>{
      navigate(`/patappointment/${id}`)
    }


    let ans = mydata.map((key)=>{
        return(
            <>
            
             <Card className="cards">
      <Card.Body >
        <Card.Text >
          <h4>Doctor Name: <span>{key.name}</span></h4>
           <h4>Specilization: <span style={{color:"green"}}>{key.specailization}</span></h4>
          <h4>Address: <span>{key.address}</span></h4>
           <h4>City: <span>{key.city}</span></h4>
             <h4>Email: <span>{key.email}</span></h4>
              <h4>Mobile Number: <span>{key.mobile}</span></h4>
        </Card.Text>
        <Button style={{backgroundColor:"rgba(44, 117, 206, 0.64)"}} onClick={()=>{handleNavigate(key._id)}} >Book Appoitment</Button>
      </Card.Body>
    </Card>

            </>
        )
    })



    return(
        <>
        
        <div className="cover">
            <div className="homecontent">
            <h1>We Provide <span>Medical</span> Services That You Can <span> Trust</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique velit aperiam iure facere quod minima id sunt.</p>
            </div>
        </div>

         <div className="drcontent">
            <h1>We Are Always Ready to Help You.</h1>
            <h1>Book An Appointment</h1>
            <img src="https://wpthemesgrid.com/themes/medikit/img/section-img.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet.</p>
            <p>pretiumts</p>
         </div>

        <div className="drcard">
          {ans}
        </div>
        
        </>
    )
}

export default Home
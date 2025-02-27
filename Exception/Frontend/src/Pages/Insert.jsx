import axios from "axios"
const Insert = () =>{

    const handleInput = async() =>{

        let api = "http://localhost:8000/home"

        try {
            let response = await axios.get(api);
            console.log(response);
        } catch (error) {
            console.log(error)
        }

    }
    return(
        <>
        <h1>Insert page</h1>
        <button onClick={handleInput} >Click me</button>
        
        </>
    )
}

export default Insert
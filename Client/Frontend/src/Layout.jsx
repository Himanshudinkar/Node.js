import { Outlet } from "react-router-dom"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navigate"
const Layout = () =>{
    return(
        <>
        
        <Navbar/>

        <Outlet/>

        <Footer/>
        </>
    )
}

export default Layout
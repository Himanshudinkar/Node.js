import { Outlet } from "react-router-dom"
import TopNav from "./Components/TopNav"
import Footer from "./Components/Footer"

const Layout = () =>{
    return(
        <>
        
        <TopNav/>

        <main>
            <Outlet />
        </main>

        <footer>
            <Footer />
        </footer>

        
        </>
    )
}

export default Layout
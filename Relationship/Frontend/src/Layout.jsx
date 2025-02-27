import { Link,Outlet } from "react-router-dom"
const Layout = () =>{
    return(
        <>
        <header>
            <Link to={"home"}>Home |</Link>
            <Link to={"insert"}>Insert |</Link>
            <Link to={"display"}>display |</Link>
        </header>
       

       <main>
        <Outlet/>
       </main>
        
        </>
    )
}

export default Layout
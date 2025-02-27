import {Link,Outlet} from "react-router-dom"

const Layout = () =>{
    return(
        <>
        <header>
            <Link to={'Home'}>Home |</Link>
            <Link to={'insert'}>Insert |</Link>
            <Link to={'display'}>Display</Link>
        </header>

        <main>
            <Outlet/>
        </main>
        
        </>
    )
}

export default Layout
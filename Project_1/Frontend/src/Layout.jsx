import { Link, Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <>
        
        <Link to={'home'}>Home</Link> |
        <Link to={'insert'}>Insert</Link> |
        <Link to={'display'}>Display</Link>

        <hr />

        <main>
            <Outlet />
        </main>

        <hr />

        <footer>
            <h1>wwww.cybrom.com</h1>
        </footer>
        
        </>
    )
}

export default Layout
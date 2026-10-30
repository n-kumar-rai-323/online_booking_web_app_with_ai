import { Link,NavLink,Outlet } from "react-router-dom";
import { Paths } from "../Config/paths";

function Authlayout(){
    return (<>
    <div className="auth-layout">

        <header className="auth-header">
             <Link to={Paths.home} className="auth-logo">MyApp</Link>
        <nav className="navlinks">
            <NavLink to={Paths.login}>Login</NavLink>
            <NavLink to={Paths.register}>Register</NavLink>
        </nav>
        </header>
       
        <main className="auth-main">
            <Outlet />
        </main>
    </div>
    </>)
}

export default Authlayout;
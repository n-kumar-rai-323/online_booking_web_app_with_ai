import {Link, NavLink, Outlet} from "react-router-dom"
import { PATHS } from "../config/paths"
function AuthLayout(){
    return(
        <div className="auth-layout">
            <header className="auth-header">
               <Link to={PATHS.home} className="auth-logo">MyApp</Link>
               <nav className="auth-nav">
                <NavLink to={PATHS.login}>Login</NavLink>
                <NavLink to={PATHS.register}>Register</NavLink>

               </nav>
            </header>

            <main className="auth-main">
                <Outlet/>
            </main>
        </div>
    )
}


export default AuthLayout
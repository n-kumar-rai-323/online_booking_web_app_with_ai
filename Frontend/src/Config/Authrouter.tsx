import { BrowserRouter,Routes,Route } from "react-router-dom";
import Authlayout from "../Layout/Auth-layout";
import { Paths } from "./paths";
import Welcome from "../Pages/Welcome";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Notfound from "../Pages/Notfound";

function AuthRouter(){
    return (<>
    <BrowserRouter>
     <Routes>
        <Route element={<Authlayout/>}>
                <Route path={Paths.home} element={<Welcome/>}/>
                <Route path={Paths.login} element={<Login/>}/>
                <Route path={Paths.register} element={<Register/>}/>
        </Route>
        <Route path="*" element={<Notfound/>}/>
     </Routes>
    </BrowserRouter>
    </>)
}


export default AuthRouter;
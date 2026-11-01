import { Route, Routes,BrowserRouter } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"
import { PATHS } from "./paths"
import Welcome from "../pages/Welcome"
import Login from "../pages/Login"
import Register from "../pages/Register"
import NotFound from "../pages/NotFound"

function AppRoutes() {
    return (
       <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path={PATHS.home} element={<Welcome />} />
                <Route path={PATHS.login} element={<Login />} />
                <Route path={PATHS.register} element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
       </BrowserRouter>
    )
}

export default AppRoutes
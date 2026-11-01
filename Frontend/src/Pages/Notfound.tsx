import { Link } from "react-router-dom";
import { Paths } from "../Config/paths";

function Notfound(){
    return (<>
    <main className="notfound">
        <p className="notfound-code">404!</p>
        <h1 className="notfound-title">Not Found</h1>
        <p className="notfound-text">Sorry, Go to home page!!</p>
        <Link to={Paths.home}>Home</Link>
    </main>
    </>)
}

export default Notfound;
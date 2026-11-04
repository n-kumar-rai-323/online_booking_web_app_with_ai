import { Link } from "react-router-dom";
import { PATHS } from "../config/paths";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="notfound">
      <p className="notfound-code">404</p>
      <h1 className="notfound-title">Page Not Found</h1>
      <p className="notfound-text">
        The page you're looking for doesn't exist or may have been moved.
        Please check the URL or return to the home page.
      </p>
      <Link to={PATHS.home} className="notfound-link">
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;
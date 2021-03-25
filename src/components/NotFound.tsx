import { Link } from "react-router-dom";

export const NotFound = () => (
    <div style={{ textAlign: "center", color: "red" }}>
        <h2>404 Not found!</h2>
        <Link className="nav-link" to="/games">
            Back to <b>Main Page</b>
        </Link>
    </div>
);

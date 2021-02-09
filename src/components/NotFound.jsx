import { Link } from "react-router-dom";

export const NotFound = () => (
    <div style={{ textAlign: "center", color: "red" }}>
        <h2>Not found!</h2>
        <Link className="nav-link" to="/">
            Back to games
        </Link>
    </div>
);

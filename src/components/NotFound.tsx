import { Link } from "react-router-dom"

export const NotFound = () => (
    <div style={{ textAlign: "center", color: "red" }}>
        <h1 style={{ fontSize: "100px", color: "gray" }}>404</h1>
        <h2>Not Found</h2>
        <Link className="nav-link" to="/">
            Back to <b>Main Page</b>
        </Link>
    </div>
)

import { Link } from "react-router-dom"

export const NotFound = () => (
    <div
        style={{
            textAlign: "center",
            padding: "50px",
            margin: "3px",
            minHeight: "370px",
        }}
    >
        <h1 style={{ fontSize: "105px", color: "gray" }}>404</h1>
        <h3>Page Not Found</h3>
        <a style={{ fontSize: "20px" }} className="btn btn-dark center" href="/">
            Main page
        </a>
    </div>
)

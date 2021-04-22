export const Error = ({ children = "" }) => (
    <div
        style={{
            textAlign: "center",
            padding: "100px",
            margin: "10px",
            minHeight: "500px",
        }}
    >
        <h3 style={{ color: "red" }}>Oops! Error {children}</h3>
        <h5>
            Go to{" "}
            <a className="card-link center" href="/">
                Main page
            </a>
        </h5>
    </div>
)

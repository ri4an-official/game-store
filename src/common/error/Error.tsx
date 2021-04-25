export const Error = ({ children = {} as Error }) => (
    <div
        style={{
            textAlign: "center",
            padding: "100px",
            margin: "10px",
            minHeight: "500px",
        }}
    >
        <h1>
            Oops, Error!
            <br />
            <h3 style={{ color: "red" }}>{children.message}</h3>
        </h1>
        <h5>
            Back to{" "}
            <a className="card-link center" href="/">
                Main page
            </a>
        </h5>
    </div>
)

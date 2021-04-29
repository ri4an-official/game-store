export const Error = ({ children = {} as Error }) => (
    <div
        style={{
            textAlign: "center",
            padding: "100px",
            margin: "10px",
            minHeight: "500px",
        }}
    >
        <h1 style={{ fontSize: "105px", color: "gray" }}>
            {children.message.match(/\d+/) ?? 404}
        </h1>
        <h3>
            Whoops! Something went wrong.
            <br /> We are looking into it.
        </h3>
        <h1>{/* <h3 style={{ color: "red" }}>{children.message}</h3> */}</h1>
        <a style={{ fontSize: "20px" }} className="btn btn-dark center" href="/">
            Main page
        </a>
    </div>
)

import { Form, Formik, Field } from "formik"
import { fxLogin } from "../common/models/login"
import { FormControl, Button, Alert } from "react-bootstrap"
import { useHistory } from "react-router"
import { useState } from "react"
export default () => {
    const history = useHistory()
    const [error, setError] = useState("")
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (user) => {
                if ((await fxLogin({ ...user })).login) history.push("/")
                else setError("Invalid email or password")
            }}
        >
            <Form>
                {error && <Alert variant="danger">{error}</Alert>}
                <Field
                    name="email"
                    component={({ field }: any) => (
                        <FormControl {...field} required placeholder="Email" />
                    )}
                />
                <Field
                    name="password"
                    component={({ field }: any) => (
                        <FormControl
                            {...field}
                            required
                            type="password"
                            placeholder="Password"
                        />
                    )}
                />
                <Button className="center" variant="success" type="submit">
                    Login
                </Button>
            </Form>
        </Formik>
    )
}

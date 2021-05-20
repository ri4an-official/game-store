import { Form, Formik, Field } from "formik"
import { User } from "../common/models/User"
import { login } from "../common/models/login"
import { FormControl, Button } from "react-bootstrap"
import { useHistory } from "react-router"
export default () => {
    const history = useHistory()
    return (
        <Formik
            initialValues={{ name: "", password: "" }}
            onSubmit={async ({ name, password }) => {
                login(new User(name, password))
                history.push("/")
            }}
        >
            <Form>
                <Field
                    name="name"
                    component={({ field }: any) => (
                        <FormControl {...field} required placeholder="Login" />
                    )}
                />
                <Field
                    name="password"
                    component={({ field }: any) => (
                        <FormControl {...field} required placeholder="Password" />
                    )}
                />
                <Button className="center" variant="success" type="submit">
                    Login
                </Button>
            </Form>
        </Formik>
    )
}

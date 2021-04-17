import { Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { User } from "../../common/models/User"
import { login } from "../../common/redux/login-form"

export const Login = () => {
    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={{ name: "", password: "" }}
            onSubmit={async ({ name, password }) =>
                dispatch(login({ name, password } as User))
            }
            validate={({ name, password }) => {}}
        >
            <Form></Form>
        </Formik>
    )
}

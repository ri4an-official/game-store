import { Button, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/controls";

export const LoginForm = reduxForm({ form: "login" })(() => {
    return (
        <Form className="justify-content-center">
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Field name="username" component={Input} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Field
                    name="username"
                    component={({ input }) => (
                        <Input {...input} type="password" />
                    )}
                />
            </Form.Group>
            <Button variant="primary">Sign In</Button>
        </Form>
    );
});

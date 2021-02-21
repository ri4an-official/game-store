import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact";
import { Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

export const LoginForm = reduxForm({ form: "login" })((props) => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <Form
                        className="col-md-5 mt-5"
                        onSubmit={props.handleSubmit}
                    >
                        <p className="h5 text-center mb-4">Sign in</p>
                        <div className="grey-text">
                            <Field
                                name="title"
                                component={({ input }: any) => (
                                    <MDBInput
                                        label="Type your email"
                                        icon="envelope"
                                        group
                                        {...input}
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                )}
                            />
                            <Field
                                name="password"
                                component={({ input }: any) => (
                                    <MDBInput
                                        label="Type your password"
                                        icon="lock"
                                        group
                                        {...input}
                                        type="password"
                                        validate
                                    />
                                )}
                            />
                        </div>
                        <div className="text-center">
                            <MDBBtn>Login</MDBBtn>
                        </div>
                    </Form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        // <Form className="justify-content-center">
        //     <Form.Group>
        //         <Form.Label>Username</Form.Label>
        //         <Field name="username" component={Input} />
        //     </Form.Group>
        //     <Form.Group>
        //         <Form.Label>Password</Form.Label>
        //         <Field
        //             name="password"
        //             component={(props) => <Input {...props} type="password" />}
        //         />
        //     </Form.Group>
        //     <Button variant="primary">Sign In</Button>
        // </Form>
    );
});

import { Button, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
export const AddGameForm = reduxForm({ form: "add-game" })((props) => (
    <>
        <Form className="col-md-5 mt-5" onSubmit={props.handleSubmit}>
            <Form.Group>
                <Form.Label>
                    <h3>Title</h3>
                </Form.Label>
                <Field
                    name="title"
                    component={({ input }) => (
                        <Form.Control
                            {...input}
                            required
                            type="input"
                        ></Form.Control>
                    )}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <h3>Price</h3>
                </Form.Label>
                <Field
                    name="price"
                    component={({ input }) => (
                        <Form.Control
                            {...input}
                            required
                            type="input"
                        ></Form.Control>
                    )}
                />
            </Form.Group>
            <Form.Group>
                <Button variant="success" type="submit">
                    Create
                </Button>
            </Form.Group>
        </Form>
    </>
));

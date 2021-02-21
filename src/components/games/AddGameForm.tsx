import { Button, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/controls";
export const AddGameForm = reduxForm({ form: "add-game" })((props: any) => (
    <Form className="col-md-5 mt-5" onSubmit={props.handleSubmit}>
        <Form.Group>
            <Form.Label>
                <h3>Title</h3>
            </Form.Label>
            <Field name="name" component={Input} />
        </Form.Group>
        <Form.Group>
            <Form.Label>
                <h3>Price</h3>
            </Form.Label>
            <Field name="raiting" component={Input} />
        </Form.Group>
        <Form.Group>
            <Button variant="success" type="submit">
                Create
            </Button>
        </Form.Group>
    </Form>
));

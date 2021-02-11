import { Button, Form } from "react-bootstrap";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/controls";
export const AddGameForm = compose(
    withRouter,
    reduxForm({ form: "add-game" })
)((props) => (
    <Form className="col-md-5 mt-5" onSubmit={props.handleSubmit}>
        <Form.Group>
            <Form.Label>
                <h3>Title</h3>
            </Form.Label>
            <Field name="title" component={Input} />
        </Form.Group>
        <Form.Group>
            <Form.Label>
                <h3>Price</h3>
            </Form.Label>
            <Field name="price" component={Input} />
        </Form.Group>
        <Form.Group>
            <Button
                onClick={() => props.history.push("/")}
                variant="success"
                type="submit"
            >
                Create
            </Button>
        </Form.Group>
    </Form>
));

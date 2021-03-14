import { Button, Form, InputGroup } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/utils/controls";

export const Search = reduxForm({
    form: "search",
    initialValues: { name: "" },
})((props) => (
    <Form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="name" component={Input} />
            <Button type="submit" variant="secondary">
                Search
            </Button>
        </InputGroup>
    </Form>
));

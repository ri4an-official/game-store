import { Button, Form, InputGroup } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/controls";

export const Search = reduxForm({
    form: "search",
    initialValues: { gameName: "" },
})((props) => (
    <Form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="gameName" component={Input} />
            <Button type="submit" variant="secondary">
                Search
            </Button>
        </InputGroup>
    </Form>
));

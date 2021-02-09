import { Button, Form, InputGroup } from "react-bootstrap";

export const AddGameForm = (props) => (
    <>
        <Form onSubmit={props.addGame}>
            <InputGroup>
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" type="input"></Form.Control>
            </InputGroup>
            <InputGroup>
                <Form.Label>Price</Form.Label>
                <Form.Control name="price" type="input"></Form.Control>
            </InputGroup>
            <Button variant="warning">Create</Button>
        </Form>
    </>
);

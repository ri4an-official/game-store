import { Form } from "react-bootstrap";

export const Input = (props: any) => (
    <Form.Control {...props} required type="input" />
);

import { Form } from "react-bootstrap";

export const Input = ({ input }) => (
    <Form.Control {...input} required type="input" />
);

import { Form } from "react-bootstrap";

export const Input = ({ input }: any) => (
    <Form.Control {...input} required type="input" />
);

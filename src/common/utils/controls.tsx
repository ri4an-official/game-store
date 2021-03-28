import { Form } from "react-bootstrap";

export const Input = ({ input }: any) => (
    <Form.Control
        placeholder="Enter name of the game..."
        {...input}
        required
        type="input"
    />
);

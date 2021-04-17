import { Form } from "react-bootstrap"

export const Input = ({ field }: any) => (
    <Form.Control
        placeholder="Enter name of the game..."
        {...field}
        required 
        type="input"
    />
)

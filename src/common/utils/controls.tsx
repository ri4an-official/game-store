import { Form } from "react-bootstrap"

export const Input = ({ field }: any) => (
    <Form.Control
        {...field}
        placeholder="Enter title of the game..."
        required
        type="input"
    />
)

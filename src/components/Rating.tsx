import { Alert } from "react-bootstrap";

export const Rating = ({ children }: { children: number }) => (
    <Alert className="right" type={children < 3 ? "danger" : "success"}>
        {children} / 10
    </Alert>
);

import { useDispatch } from "react-redux";
import { User } from "../../common/models/User";
import { login } from "../../common/redux/login-form";
import { LoginForm } from "./LoginForm";

export const Login = () => {
    const dispatch = useDispatch();
    return (
        <div className="container">
            <LoginForm onSubmit={(user: any) => dispatch(login({ ...user }))} />
        </div>
    );
};

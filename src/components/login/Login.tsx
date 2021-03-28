import { useDispatch } from "react-redux";
import { login } from "../../common/redux/login-form";
import { LoginForm } from "./LoginForm";

export const Login = () => {
    const dispatch = useDispatch();
    return <LoginForm onSubmit={(user: any) => dispatch(login({ ...user }))} />;
};

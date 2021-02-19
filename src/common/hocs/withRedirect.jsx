import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export const withRedirect = (Component) => (props) =>
    useSelector((state) => state.login.auth) ? (
        <Component {...props} />
    ) : (
        <Redirect to="/login" />
    );

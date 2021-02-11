import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export const withRedirect = (Component) => (props) =>
    useSelector((state) => state.gamesStore.isAuth) ? (
        <Component {...props} />
    ) : (
        <Redirect to="/login" />
    );

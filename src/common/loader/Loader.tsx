import { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { NotFound } from "../../components/NotFound";
import loader from "./../../common/images/Dual Ring-0.8s-114px.svg";
export const Loader = () => {
    const [timeIsUp, setTimeIsUp] = useState(false);
    useAsyncEffect(() => setTimeout(() => setTimeIsUp(true), 5000), []);
    return timeIsUp ? (
        <NotFound />
    ) : (
        <div className="center">
            <img src={loader} />
        </div>
    );
};

export const Money = ({ children = 0, className = "", type = "USD" }) => (
    <h4 className={className}>
        {children}{" "}
        {(type === "RUB" && "RUB.") ||
            (type === "USD" && "$") ||
            (type === "TEN" && " TEN.") ||
            type + "."}
    </h4>
);

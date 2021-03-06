export const Money = ({ children = 0, className = "", type = "RUB" }) => (
    <strong className={className}>
        {children}{" "}
        {(type === "RUB" && " RUB.") ||
            (type === "USD" && "$") ||
            (type === "TEN" && " TEN.") ||
            type + "."}
    </strong>
);

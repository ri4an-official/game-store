export const Money = ({
    children = 0,
    rub = true,
    tenge = false,
    dollar = false,
    type = "RUB",
}: {
    children: number;
    type?: string;
    tenge?: boolean;
    rub?: boolean;
    dollar?: boolean;
}) => (
    <strong className="top noblock right">
        {children}{" "}
        {(rub && " RUB.") ||
            (dollar && "$") ||
            (tenge && " TEN.") ||
            type + "."}
    </strong>
);

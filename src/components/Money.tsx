export const Money = ({
    children,
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
}) =>
    children ? (
        <strong className="noblock right">
            {children}{" "}
            {(rub && " RUB.") ||
                (dollar && "$") ||
                (tenge && " TEN.") ||
                type + "."}
        </strong>
    ) : (
        <></>
    );

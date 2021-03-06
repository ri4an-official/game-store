const toColor = (rating: number): string => {
    if (rating > 4.6) return "green";
    if (rating < 4.6 && rating > 4.3) return "yellow";
    return "red";
};
export const Rating = ({ children = 0, cn = "" }) => (
    <b className={`${cn} ${toColor(children)}`}>{children} / 5</b>
);

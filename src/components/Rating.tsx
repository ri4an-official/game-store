const toColor = (rating: number): string => {
    if (rating >= 4) return "green";
    if (rating < 4 && rating >= 3) return "yellow";
    return "red";
};
export const Rating = ({ children = 0, cn = "" }) => (
    <b className={`${cn} ${toColor(children)}`}>{children} / 5*</b>
);


export const GameDetails = ({ children }) => {
    return (
        <span className="game-description">
            <h1 className="noblock">{children.title}</h1>{" "}
            <b className="noblock right">{children.price} руб.</b>
        </span>
    );
};

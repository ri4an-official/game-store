export const GameDetails = ({ children }) => {
    return (
        <span className="game-description">
            <h3 className="noblock">{children && children.name}</h3>{" "}
            <b className="noblock right">{children && children.rating + " / 10"} </b>
        </span>
    );
};

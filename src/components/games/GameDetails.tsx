import { Game } from "../../common/models/Game";

export const GameDetails = ({ children }: { children: Game; }) => (
    <span className="game-description">
        <h3 className="noblock">{children && children.name}</h3>{" "}
        <b className="noblock right">
            {children && children.rating + " / 10"}{" "}
        </b>
    </span>
);

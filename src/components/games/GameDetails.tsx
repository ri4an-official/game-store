import { Game } from "../../common/models/Game";
import { NotFound } from "../NotFound";

export const GameDetails = ({ children }: { children: Game }) =>
    children ? (
        <div className="container game-description">
            <div className="center">
                <img src={children.background_image} width="550" height="320" />
                <h1>{children.name}</h1>
            </div>
            <text dangerouslySetInnerHTML={{ __html: children.description }} />
        </div>
    ) : (
        <NotFound />
    );

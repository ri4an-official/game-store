import { Game } from "../../common/models/Game";
import { NotFound } from "../NotFound";
import { AddToBasket } from "../AddToBasket";
import { URL } from "url";
export const GameDetails = ({ children }: { children: Game }) =>
    children.name ? (
        <div className="container game-description">
            <img
                className="center img"
                height="150"
                src={children.background_image}
            />
            <AddToBasket>{children}</AddToBasket>
            <h1 className="center">{children.name}</h1>
            <p />
            <strong
                style={{ fontFamily: "Arial" }}
                dangerouslySetInnerHTML={{ __html: children.description }}
            />
        </div>
    ) : (
        <NotFound />
    );

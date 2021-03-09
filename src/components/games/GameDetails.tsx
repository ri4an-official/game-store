import { Game } from "../../common/models/Game";
import { NotFound } from "../NotFound";
import { AddToBasket } from "../AddToBasket";
export const GameDetails = ({ children }: { children: Game }) =>
    children.name ? (
        <>
            <span>
                <AddToBasket>{children}</AddToBasket>
            </span>
            <p>
                <img
                    className="center img"
                    height="150"
                    src={children.background_image}
                />
                <h1 className="center">{children.name}</h1>
                <strong
                    style={{ fontFamily: "Arial" }}
                    dangerouslySetInnerHTML={{ __html: children.description }}
                />
            </p>
        </>
    ) : (
        <NotFound />
    );

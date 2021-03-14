import { Game } from "../../common/models/Game";
import { Link } from "react-router-dom";
import { Money } from "../Money";
import { AddToBasket } from "../AddToBasket";
import { Rating } from "../Rating";
export const GameItem = ({ children }: { children: Game }) => (
    <Link to={`/games/${children.slug}`} className="game noblock shadow">
        <div className="block-left">
            {children.key && (
                <small className="center">
                    {children.key}
                </small>
            )}
            <img className="game-img" src={children.background_image} />
        </div>
        <div className="block-right">
            <Money className="noblock">{children.price}</Money>
            <Rating>{children.rating}</Rating>
        </div>
        <Name>{children.name}</Name>
        <AddToBasket>{children}</AddToBasket>
    </Link>
);
export const Name = ({ children }: { children: string }) => (
    <h3 className="noblock game-name">
        {children.length <= 13 ? children : children.substring(0, 13) + "..."}
    </h3>
);

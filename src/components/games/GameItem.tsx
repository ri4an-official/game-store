import { Game } from "../../common/models/Game";
import { Link } from "react-router-dom";

import { Money } from "../Money";
import { AddToBasket } from "../AddToBasket";
export const GameItem = ({ children }: { children: Game }) => (
    <Link to={`/games/${children.slug}`} className="game noblock shadow">
        <Money className="right noblock">{children.price}</Money>
        <img className="game-img" src={children.background_image} />
        <Name>{children.name}</Name>
        <AddToBasket>{children}</AddToBasket>
    </Link>
);
const Name = ({ children }: { children: string }) => (
    <h3 className="noblock game-name">
        {children.length <= 16 ? children : children.substring(0, 16) + "..."}
    </h3>
);

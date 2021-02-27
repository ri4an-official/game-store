import { Game } from "../../common/models/Game";
import { GameItem } from "./../games/GameItem";

export const Games = ({ children }: { children: Game[] }) => (
    <div className="games">
        {children.map((g) => (
            <GameItem key={g.id}>{g}</GameItem>
        ))}
    </div>
);

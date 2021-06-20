import { Game } from "../../common/models/Game"
import { AddToBasket } from "../AddToBasket"
import { useParams } from "react-router"
import { useState } from "react"
import useAsyncEffect from "use-async-effect"
import { gamesApi } from "../../common/models/api"
import { Loader } from "../../common/loader/Loader"

export const GameDetails = () => {
    const [selectedGame, setSelectedGame] = useState({} as Game)
    const title = useParams<any>().title as string
    useAsyncEffect(async () => setSelectedGame(await gamesApi.details(title)), [title])
    return selectedGame.slug ? (
        <>
            <span>
                <AddToBasket>{selectedGame}</AddToBasket>
            </span>
            <p>
                <img
                    className="center img"
                    height="150"
                    src={selectedGame.background_image}
                />
                <h1 className="center">{selectedGame.name}</h1>
                <p />
                <strong
                    style={{ fontFamily: "Arial" }}
                    dangerouslySetInnerHTML={{
                        __html: selectedGame.description,
                    }}
                />
            </p>
        </>
    ) : (
        <Loader />
    )
}

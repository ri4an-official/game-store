import { Game } from "../../common/models/Game"
import { AddToBasket } from "../AddToBasket"
import { useParams } from "react-router"
import useAsyncEffect from "use-async-effect"
import { Loader } from "../../common/loader/Loader"
import { setGameDetails, $selectedGame } from "../../common/models/games"
import { useStore } from "effector-react"

export default () => {
    const title = useParams<any>().title as string
    const selectedGame = useStore($selectedGame)
    useAsyncEffect(async () => setGameDetails(title), [title])
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

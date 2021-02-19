import { Game } from './../models/Game';
import axios from "axios";

const games = axios.create({
    baseURL: "https://rawg-video-games-database.p.rapidapi.com/games",
    headers: {
        "x-rapidapi-key": "37437d4ec5msh0b5b355674a5af8p1f7993jsndb1173addba0",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    },
});
export const getGames = () : Promise<Game[]> => games.get("").then((r) => r.data.results);

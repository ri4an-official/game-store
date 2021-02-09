const { default: axios } = require("axios");

const instance = axios.create({
    baseURL: "http://localhost:3001/games/",
    withCredentials: false,
});


export const games={
    async get(id){
        return (await instance.get(id))
    }
}
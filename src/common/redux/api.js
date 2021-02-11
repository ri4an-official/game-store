const { default: axios } = require("axios");

const instance = axios.create({
    baseURL: "",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const games = {
    async get(id) {
        return await instance.get(id);
    },
};

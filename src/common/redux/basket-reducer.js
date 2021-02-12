const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
    name: "basket",
    initialState: {
        games: [],
    },
    reducers: {
        add({ games }, { payload }) {
            games.push(payload);
        },
        remove({ games }, { payload }) {
            games.pop(games.filter((g) => g.id === payload));
        },
    },
});
export default slice.reducer;
export const { add, remove } = slice.actions;

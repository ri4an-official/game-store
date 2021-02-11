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
            games.pop(payload);
        },
    },
});
export default slice.reducer;
export const { add, remove } = slice.actions;

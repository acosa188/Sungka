import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "blueState",
    initialState: {
        score: 0,
        first_hole: 7,
        second_hole: 7,
        third_hole: 7,
        fourth_hole: 7,
        fifth_hole: 7,
        sixth_hole: 7,
        seventh_hole: 7
    },
    reducers: {
        addScore: (state) =>{
            state.score += 1;
        }
    }
});

export default slice.reducer;
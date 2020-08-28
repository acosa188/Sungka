import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "redState",
    initialState: {
        score: 0,
        holes:[7,7,7,7,7,7,7]
    },
    reducers: {
        addScore: (state) =>{
            state.score += 1;
        },
        movePebbles: (state, action) => {

            for(let i = action.payload.position - 1; i < state.holes.length; i++){

            }
        }
    }
});

export default slice.reducer;
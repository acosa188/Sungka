import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "blueState",
    initialState: {
        score: 0,
        holes:[7,7,7,7,7,7,7]
    },
    reducers: {
        addScore: (state) =>{
            state.score += 1;
        },
        movePebbles: (state, action) => {
            // empty the hole
            state.holes[action.payload.position - 1] = -1;

             for(let i = action.payload.position - 1; i >= 0; i--){
                 state.holes[i] += 1;
             };

            if(action.payload.numPebbles >= action.payload.position){
                state.score += 1;
            }

        }
    }
});

export default slice.reducer;

export const {
    movePebbles
} = slice.actions
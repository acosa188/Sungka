import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "gameState",
    initialState: {
        blueScore: 0,
        redScore: 0,
        holes:[7,7,7,7,7,7,7,7,7,7,7,7,7,7]
    },
    reducers: {
        movePebbles: (state, action) => {
            const player = action.payload.team;
            let position = player === 'red' ? 6 + action.payload.position : action.payload.position - 1;
            let numPebbles = state.holes[position];

            loop1:
            while(numPebbles > 0){
                state.holes[position] = 0;

                loop2:
                for(let i = numPebbles; i > 0; i--){
                    position += 1;
                    position %= 14;

                    if(player === 'blue'){
                        if(position === 7){
                            state.blueScore += 1;
                            break loop2;
                        }
                    }else{
                        if(position === 0){
                            state.redScore += 1;
                            break loop2;
                        }
                    }
                    state.holes[position] += 1;
                }
                numPebbles = state.holes[position] !== 0 ?  state.holes[position] + 1: 0;
            }
        }
    }
});

export default slice.reducer;

export const {
    movePebbles
} = slice.actions;


import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "gameState",
    initialState: {
        blueScore: 0,
        redScore: 0,
        holes: [7, 7, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 0]
    },
    reducers: {
        movePebbles: (state, action) => {
            const player = action.payload.team;
            let position = player === 'red' ? 7 + action.payload.position : action.payload.position - 1;
            let numPebbles = state.holes[position];

            state.holes[position] = 0;
            while (numPebbles > 0) {
                // move one hole block
                position += 1;
                position %= 16;

                if (player === 'blue' && position === 15) {
                    position += 1;
                    position %= 16;
                }
                if (player === 'red' && position === 7) {
                    position += 1;
                    position %= 16;
                }

                // add pebble
                state.holes[position] += 1;

                // remove pebble count
                numPebbles -= 1;


                if (numPebbles === 0 && (position !== 7 && position !== 15)) {
                    numPebbles += state.holes[position];
                    if (numPebbles === 1) {
                        // TODO
                        // Create the rule when hole does not have any marble, remove across enemy 
                        // marbles, then add it home base
                        let check = (player === 'blue' && position < 7) || (player === 'red' && position > 7) ? true : false;
                       
                        // Check if hole is in the right position
                        if (check){
                            let across_position = 0;
                            // Get the across position
                            if(position < 7){
                                across_position = 16 - (position + 2);
                            }
                            else{
                                across_position = Math.abs((position + 2) - 16);
                            }
                     
                            if(state.holes[across_position] > 0){
                                let addToHome = state.holes[across_position] + 1;
                                //empty both holes
                                state.holes[across_position] = 0;
                                state.holes[position] = 0;
    
                                //add pebbles to home
                                if(player === 'blue'){
                                    state.holes[7] += addToHome;

                                }
                                else{
                                    state.holes[15] += addToHome;
                                }
                            }
                        }                      
                        break;
                    }
                    state.holes[position] = 0;

                }
            }
        }
    }
});

export default slice.reducer;

export const {
    movePebbles
} = slice.actions;


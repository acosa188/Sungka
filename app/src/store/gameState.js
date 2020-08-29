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


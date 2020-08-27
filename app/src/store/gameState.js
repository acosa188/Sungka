import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "gameState",
    initialState: {
        blue_base: 0,
        red_base: 0,
        b_base_1: 7,
        b_base_2: 7,
        b_base_3: 7,
        b_base_4: 7,
        b_base_5: 7,
        b_base_6: 7,
        b_base_7: 7,
        r_base_1: 7,
        r_base_2: 7,
        r_base_3: 7,
        r_base_4: 7,
        r_base_5: 7,
        r_base_6: 7,
        r_base_7: 7
    },
    reducers: {

    }
});

export default slice.reducer;


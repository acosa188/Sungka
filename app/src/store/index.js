import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import gameReducers from './gameState';
import redReducers from './redState';
import blueReducers from './blueState';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        game: gameReducers,
        red: redReducers,
        blue: blueReducers
    },
    middleware
});

export default store;
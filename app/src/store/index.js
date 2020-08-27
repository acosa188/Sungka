import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import gameReducers from './gameState';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: gameReducers,
    middleware
});

export default store;
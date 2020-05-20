import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import gameReducer from "../features/Game/slice";
import historyReducer, { loadHistory } from "../features/History/slice";
import saveToLocalStorage from "../features/History/saveToLocalStorage";

export const reducer = combineReducers({
    game: gameReducer,
    history: historyReducer
})

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), saveToLocalStorage],
    preloadedState: {
        history: loadHistory()
    }
})

export default store;
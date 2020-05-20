import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "../Game/slice";
import { RootState } from "../../store/store";

const STORAGE_KEY = "array-game";

export interface HistoryItem {
    array: GameState["array"],
    path: GameState["path"]
}

export interface HistoryState {
    solved: HistoryItem[];
}

export const initialState: HistoryState = {
    solved: []
}

export const slice = createSlice({
    name: "history",
    initialState,
    reducers: {
        add: (state, action) => {
            state.solved = [...state.solved, action.payload];
        }
    },
});

export const { add } = slice.actions;

export function loadHistory(): HistoryState {
    const loadedState = localStorage.getItem(STORAGE_KEY);
    return loadedState ? { ...initialState, ...JSON.parse(loadedState) } : initialState;
}

export function saveHistory(historyState: HistoryState): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(historyState));
}

export const selectHistory = (state: RootState) => state.history.solved;

export default slice.reducer;

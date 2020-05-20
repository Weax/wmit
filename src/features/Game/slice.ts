import { createSlice } from "@reduxjs/toolkit";
import { RootState, StoreDispatch } from "../../store/store";
import { arrayCompare, traceInput, findPath } from "./utils";
import { HistoryItem, add } from "../History/slice";

export interface GameState {
    array: number[],
    input: string,
    processed: boolean,
    path: number[]
}

export const initialState: GameState = {
    array: [],
    input: "",
    processed: false,
    path: []
}

export const slice = createSlice({
    name: "game",
    initialState,
    reducers: {
        newGame: () => ({ ...initialState }),
        setInputValue: (state, action) => {
            state.processed = false;
            state.input = action.payload;
        },
        setArray: (state, action) => {
            state.array = action.payload;
        },
        setPath: (state, action) => {
            state.path = action.payload;
            state.processed = true;
        },
        resetProcessed: (state) => {
            state.processed = false;
        }
    },
});

export const { newGame, setInputValue, setArray, setPath, resetProcessed } = slice.actions;

export const checkIsWinnable = (string: string) => (dispatch: StoreDispatch, getState: () => RootState) => {
    const array = traceInput(string);
    dispatch(setArray(array));
    dispatch(setInputValue(array.join(", ")));

    if (array.length > 0) {

        //look for array in history
        const solved = getState().history.solved;
        const arrayInSolved = solved.filter(e => arrayCompare(e.array, array));

        if (arrayInSolved.length > 0) { //we already solved this array        
            const [historyItem] = arrayInSolved;
            dispatch(setPath(historyItem.path)); //display result
        } else {
            const path = findPath(array);
            dispatch(setPath(path));
            //save history
            const historyItem: HistoryItem = { array, path };
            dispatch(add(historyItem));
        }

    } else {
        dispatch(setPath([]));
    }

};

export const selectInputValue = (state: RootState) => state.game.input;
export const selectProcessed = (state: RootState) => state.game.processed;
export const selectWinnable = (state: RootState) => state.game.path.length > 0;

export default slice.reducer;

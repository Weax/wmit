import reducer, { initialState, newGame, setPath, checkIsWinnable, setArray, setInputValue, selectInputValue, selectProcessed, selectWinnable } from './slice';
import { add, initialState as initialHistoryState } from "../History/slice";
import { winnable1 } from "./testData";

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('Game slice', () => {
    describe('reducer, actions and selectors', () => {
        it('should return the initial state on first run', () => {
            // Arrange
            const nextState = initialState;
            // Act
            const result = reducer(undefined, {});
            // Assert
            expect(result).toEqual(nextState);
        });

        it('should set array to winnable when we set some path', () => {
            const nextState = reducer(initialState, setPath(winnable1.path));
            const rootState = { game: nextState, history: initialHistoryState };
            expect(selectWinnable(rootState)).toEqual(true);
        });

        it('should set array to NOT winnable when path is empty', () => {
            const nextState = reducer(initialState, setPath([]));
            const rootState = { game: nextState, history: initialHistoryState };
            expect(selectWinnable(rootState)).toEqual(false);
        });

        it('should reset on newGame', () => {
            const nextState = reducer({
                processed: true,
                array: winnable1.array,
                path: winnable1.path,
                input: winnable1.array.toString()
            }, newGame());
            const rootState = { game: nextState, history: initialHistoryState };
            expect(selectInputValue(rootState)).toEqual("");
            expect(selectProcessed(rootState)).toEqual(false);
        });

        //thunk:

        it('should setArray, setPath and add to history', () => {
            const store = mockStore({ game: initialState, history: initialHistoryState });
            store.dispatch(checkIsWinnable(winnable1.array.toString()));

            const expectedActions = [setArray(winnable1.array), setInputValue(winnable1.array.join(", ")), setPath(winnable1.path), add(winnable1)];
            expect(store.getActions()).toEqual(expectedActions);
        });

    })
});
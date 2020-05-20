import reducer, { initialState, add, selectHistory } from "../History/slice";
import { initialState as initialGameState } from "../Game/slice";
import { winnable1, notWinnable1 } from "../Game/testData";

describe('History slice', () => {
    describe('reducer, actions and selectors', () => {
        it('should add items to history', () => {
            const nextState = reducer(initialState, add(winnable1));
            const nextState2 = reducer(nextState, add(notWinnable1));
            const rootState = { history: nextState2, game: initialGameState };
            expect(selectHistory(rootState)).toEqual([winnable1, notWinnable1]);
        });
    });
});
import { arrayCompare, traceInput, findPath } from "./utils";
import { winnable1, winnable2, notWinnable1, notWinnable2 } from "./testData";

describe('Game utils', () => {
    describe('traceInput', () => {
        it('should return array with numbers', () => {
            const arr = traceInput("1,2,   3,,,+++,-1");
            expect(arr).toEqual([1, 2, 3, -1]);
        });
        it('should return empty array', () => {
            const arr = traceInput("abc");
            expect(arr).toEqual([]);
        });
    });

    describe('arrayCompare', () => {
        it('arrays should be the same', () => {
            const compare = arrayCompare([1, 2, 3], [1, 2, 3]);
            expect(compare).toBe(true);
        });
        it('arrays should not equal', () => {
            const compare = arrayCompare([1, 2, 3, 0], [1, 2, 3]);
            expect(compare).toBe(false);
        });
    });

    describe('findPath', () => {
        it('should calculate path for winnable1', () => {
            const path = findPath(winnable1.array);
            expect(path).toEqual(winnable1.path);
        });
        it('should calculate path for winnable2', () => {
            const path = findPath(winnable2.array);
            expect(path).toEqual(winnable2.path);
        });

        it('path for notWinnable1 should be empty array', () => {
            const path = findPath(notWinnable1.array);
            expect(path).toEqual(notWinnable1.path);
        });
        it('path for notWinnable2 should be empty array', () => {
            const path = findPath(notWinnable2.array);
            expect(path).toEqual(notWinnable2.path);
        });
    });
});
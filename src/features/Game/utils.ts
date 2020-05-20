import { GameState } from "./slice";

const traceInput = (str: string) => {
    const items = str.split(",");
    return items.map(d => parseInt(d)).filter(d => !isNaN(d));
}

const arrayCompare = (arr1: any[], arr2: any[]) => {
    if (arr1 === null || arr2 === null) return false
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}

const findPath = (arr: GameState["array"]): number[] => {
    const n = arr.length;
    if (n === 0 || arr[0] === 0) return [];

    let jumps = new Array(n);
    jumps[0] = 0;

    let jumpFrom = new Array(n);

    for (let i = 1; i < n; i++) {
        jumps[i] = Infinity;
        for (let j = 0; j < i; j++) {
            if (i <= j + arr[j] && jumps[j] !== Infinity) {

                if (jumps[j] + 1 < jumps[i]) {
                    jumps[i] = jumps[j] + 1;
                    jumpFrom[i] = j;
                }
                break;
            }
        }
    }

    let path = [];
    let i = jumpFrom[n - 1];
    while (i > 0) {
        path.push(i);
        i = jumpFrom[i];
    }
    return path.reverse();
};

export {
    arrayCompare,
    traceInput,
    findPath
};
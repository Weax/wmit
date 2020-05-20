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

const calculateMinPath = (arr: number[], indexWhereToGo: number):number[] | null => {
    if (indexWhereToGo === 0) return [];

    for (let i = 0; i < indexWhereToGo; i++) { //i -> index of element we try to jump from
        if (i + arr[i] >= indexWhereToGo) { //arr[i] -> how far we can jump
            let pathToThatElement = calculateMinPath(arr, i);            
            return pathToThatElement ? [...pathToThatElement, i] : null;
        }
    }

    return null;
}

const findPath = (arr: GameState["array"]): number[] => {
    const n = arr.length;
    if (n === 0 || arr[0] === 0) return [];

    //let's start from the end and see if we can reach this element from element 0, element 1 and etc.
    //if we can, save this index in path and try to reach our new index from el 0, el 1 and etc.
    //result is path of array indexes
    let result = calculateMinPath(arr, n - 1);

    return result || [];
};

export {
    arrayCompare,
    traceInput,
    findPath
};
import { HistoryItem } from "./slice";

export const highlightPath = ({ array, path }: HistoryItem) => {
    if (path.length > 0) {
        let str = "";
        for (let i = 0; i < array.length - 1; i++) {
            let pathIndex;
            for (let j = 0; j < path.length; j++) {
                if (i === path[j]) pathIndex = `<b>${array[path[j]]}</b>`;
            }
            str += pathIndex || array[i];
            str += ", ";
        }
        str += `<b>${array[array.length - 1]}</b>`;
        return str;
    } else {
        return array.join(", ")
    }
}
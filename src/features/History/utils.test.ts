import { highlightPath } from "./utils";

const winnable = {
    array: [1, 2, 0, 3, 0, 2, 0],
    path: [0, 1, 3]
}

describe('History utils', () => {
    describe('highlightPath', () => {
        it('should add bold to array values by path indexes', () => {
            const htmlString = highlightPath(winnable);
            expect(htmlString).toEqual("<b>1</b>, <b>2</b>, 0, <b>3</b>, 0, 2, <b>0</b>");
        });
     });
});
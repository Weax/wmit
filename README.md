# Is winnable? (array) game
Game rules: 
1. You start at first step. 
2. Current step value determines how much steps you can take at maximum. (Example: if the value is 3 you can take 0, 1, 2 or 3 steps). 
3. Game goal is to reach last step.

Game is done using React and Redux with Typescript.
Project was bootstrapped with Create React App. I used [Redux Toolkit](https://redux-toolkit.js.org/) for organising actions, reducers and selectors. I like it's approach to have everything in one "slice" file and write much less code.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Array is analised and saved to history using LocalStorage by pressing "Check" button.

Try some examples:
Winnable array: 1, 2, 0, 3, 0, 2, 0
Non-winnable: 1, 2, 0, -1, 0, 2, 0

### `npm test`

Launches the test runner in the interactive watch mode.<br />
The test suite implemented using Jest.<br />

Test source location: 
src/features/Game/slice.test.ts
src/features/Game/utils.test.ts
src/features/History/slice.test.ts
src/features/History/utils.test.ts
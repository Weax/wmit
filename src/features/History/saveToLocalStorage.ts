import { saveHistory } from "./slice";
import { Middleware } from 'redux';

const SaveToLocalStorage: Middleware = store => next => action => {
    let result = next(action);

    //save on any action
    saveHistory(store.getState().history);
  
    return result
  };
  
  export default SaveToLocalStorage;
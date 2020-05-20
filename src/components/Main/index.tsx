import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectInputValue, setInputValue, selectProcessed, selectWinnable, checkIsWinnable } from "../../features/Game/slice";
import './styles.scss';

const Main: React.FC = () => {
    const dispatch = useDispatch();

    const processed = useSelector(selectProcessed);
    const winnable = useSelector(selectWinnable);
    const inputValue = useSelector(selectInputValue);

    return (
        <div className="main">
            Array:
            <div className="arrayInput">
                [<input type="text" placeholder="Enter numbers separated by comma" value={inputValue} onChange={(e) => dispatch(setInputValue(e.target.value))} />]
            </div>
            {processed &&
                <span className={winnable ? 'success' : 'failure'}>is {!winnable && "not"} winnable!</span>
            }
            <div><button onClick={() => dispatch(checkIsWinnable(inputValue))}>Check</button></div>
        </div>
    );
};

export default Main;
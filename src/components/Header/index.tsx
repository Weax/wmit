import React from 'react';
import { useDispatch } from "react-redux";
import { newGame } from "../../features/Game/slice";
import './styles.scss';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="header">
            <h1>Is winnable?</h1>
            <button onClick={() => dispatch(newGame())}>New</button>
        </div>
    );
};

export default Header;
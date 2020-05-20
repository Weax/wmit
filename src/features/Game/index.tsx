import React from 'react';
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { newGame } from "./slice";

import './styles.scss';

const Game: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="game">
            <Header buttonAction={() => dispatch(newGame())} />
            <Main />
            <Footer />
        </div>
    );
}

export default Game;
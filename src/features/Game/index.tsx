import React from 'react';
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './styles.scss';

const Game: React.FC = () => {
    return (
        <div className="game">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default Game;
import React from "react";
import Header from "../components/Header";
import NewsCard from '../components/NewsCard';
import character from '../images/character.png';
import "./Initial.css";

export default function Initial() {
    return(
        <div>
            <Header />
            <img className="character" src={ character } alt="character" />
            <div className="char-background">
                <NewsCard />
            </div> 
            <div className="char-background-border" />
        </div>
    )
}
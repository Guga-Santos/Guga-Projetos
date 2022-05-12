import React from "react";
import Header from "../components/Header";
import UserSearchInputs from '../components/UserSearchInputs';
import "./Stats.css";

export default function Stats() {
    return (
        <div className="stats-container">
            <Header />
            <UserSearchInputs />
            <div className="stats-box-one">
                <div className="top-border-box-one">
                    <div className="top-border-box-one-right">
                    </div>
                </div>
                <h1>OVERALL</h1>
            </div>
            {/* <Table /> */}
            <div className="matches-stats-container">
                <div className="matches-stats-solo">
                    <div className="matches-stats-solo-right" />
                    <h1 className="category-title">DUO </h1>
                </div>
                <div className="matches-stats-duo">
                    <div className="matches-stats-duo-right" />
                    <h1 className="category-title">TRIO </h1>
                </div>
                <div className="matches-stats-trio">
                    <div className="matches-stats-trio-right" />
                    <h1 className="category-title">SQUAD</h1>
                </div>
            </div>
        </div>
    )
}
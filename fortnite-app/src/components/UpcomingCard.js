import React, { useContext } from "react";
import FortniteContext from "../context/FortniteContext";

export default function UpcomingCard() {
    const context = useContext(FortniteContext);
    const { upcoming } = context;

    return (
        <div className="uncoming-container">
            { upcoming?.items.map((obj) => (
                <div className="upcoming-card" key={obj.id}>
                    <img src={obj?.images?.full_background} alt="" />
                </div>
            ))}
        </div>
    )



}
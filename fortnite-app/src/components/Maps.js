import React, { useContext, useState } from "react";
import FortniteContext from "../context/FortniteContext";

export default function Maps() {
    const [index, setIndex] = useState(0);

    const context = useContext(FortniteContext);
    const { maps } = context;

    const handleClick = ({target}) => {
        // target.id === 'Prev' ? setIndex(index - 1) : setIndex(index + 1)
        // console.log(index);

        if(target.id === 'Prev') {
            setIndex(index === 0 ? 0 : index - 1)
        }

        if(target.id === 'Next') {
            setIndex(index === '131' || index === 131 ? 131 : index + 1)
        }
    }

    return (
        <div className="maps-container">
            <button
            type="button"
            id="Prev"
            onClick={(e) => handleClick(e)}
            >Prev</button>
            <div className="maps-inputs">
                <img src={maps?.maps[index].url} alt="imagem do mapa" />
                <input 
                type="range" 
                min={ 0 } 
                max={ 131 }
                value={ index }
                onChange={ (e) => setIndex(e.target.value) } />
                <p>Data: {maps?.maps[index].releaseDate}</p>
            </div>
            <button
            type="button"
            id="Next"
            onClick={(e) => handleClick(e)}
            >Next</button>
        </div>
    )
}
import React, { useContext, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import FortniteContext from "../context/FortniteContext";
import './Maps.css';


export default function Maps() {
    const [index, setIndex] = useState(0);

    const context = useContext(FortniteContext);
    const { maps } = context;

    const handleClick = ({target}) => {
        if(target.id === 'Prev') {
            setIndex(index === 0 ? 0 : +index - 1)
        }

        if(target.id === 'Next') {
            setIndex(index === '130' || index > 130 ? 131 : +index + 1)

        }
    }

    return (
        <div className="maps-big-container">
           <h1>MAPAS</h1>
        <div className="maps-container">
            <button
            type="button"
            className="prevMaps-btn"
            id="Prev"
            onClick={(e) => handleClick(e)}
            >Previews</button>
            <span className="prevMaps-btn-shadow" />
            <div className="maps-inputs">
                        <div className="img-container">
                <TransformWrapper>
                    <TransformComponent>
                         <img src={maps?.maps[index]?.url} alt="imagem do mapa" />
                     </TransformComponent>
                </TransformWrapper>
                        </div>
                <input 
                type="range" 
                className="range-input"
                min={ 0 } 
                max={ 131 }
                value={ index }
                onChange={ (e) => setIndex(e.target.value) } />
                <p className="date">Data: {maps?.maps[index]?.releaseDate}</p>
                <div className="date-shadow" />
            </div>
            <button
            className="nextMaps-btn"
            type="button"
            id="Next"
            onClick={(e) => handleClick(e)}
            >Next</button>
             <span className="nextMaps-btn-shadow" />
        </div>
        </div>
    )
}
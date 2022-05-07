import React, { useEffect, useState } from "react";
import getPassRewards from "../services/getPassRewards";

export default function VideoCard() {
    const [index, setIndex] = useState(20);
    const [video, setvideo] = useState();
    const [temporada, setTemporada] = useState();

    useEffect(() => {
        const fetchPassRewards = async () => {
          const passRewards = await getPassRewards(index);
          console.log("Recompensas do passe :", passRewards)
          setvideo(passRewards?.videos[1].url ?? passRewards?.videos[0].url)
          setTemporada(passRewards?.displayInfo.chapterSeason)
         } 
         fetchPassRewards();
       }, [index])

       const handleClick = ({target}) => {
        if(target.id === 'Prev') {
            setIndex(index === 2 || index === '2' ? 2 : index - 1)
        }
        if(target.id === 'Next') {
            setIndex(index === '20' || index === 20 ? 20 : index + 1)
        }
    }

       return (
           <div className="video-container">
               <button
            type="button"
            id="Prev"
            onClick={ (e) => handleClick(e)}
            >Prev</button>
            <div>
                <h3>{temporada && temporada}</h3>
               <iframe src={video && video} title="vídeo da temporada" controls ></iframe>
            </div>
               <button
            type="button"
            id="Next"
            onClick={ (e) => handleClick(e)}
            >Next</button>

           </div>
       )

    }
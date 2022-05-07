import { useContext, useState } from "react";
import FortniteContext from "../context/FortniteContext";

export default function NewsCard() {
    const context = useContext(FortniteContext);
    const { news } = context;

    const [index, setIndex] = useState(0);

    const handleClick = ({target}) => {
        if(target.id === 'Prev') {
            setIndex(index === '24' || index === 24 ? 24 : index + 1)
        }
        if(target.id === 'Next') {
            setIndex(index === 0 ? 0 : index - 1)
        }
    }

    return (
        <div className="news-container">
            <button
            type="button"
            id="Prev"
            onClick={ (e) => handleClick(e)}
            >Prev</button>
            <div className="news-card">
                <h3>{news && news[index]?.title}</h3>
                <img src={news && news[index]?.image} alt="" />
                <p>{news && news[index]?.body}</p>
            </div>
             <button
            type="button"
            id="Next"
            onClick={ (e) => handleClick(e)}
            >Next</button>
        </div>
    )

}
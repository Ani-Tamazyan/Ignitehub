import React, { useState, useEffect } from 'react';
import "../../styles/News/NewsPart2.scss";

import cardPhoto from "../../assets/Images/cardPhoto.png"

function NewsPart2() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        fetch("./data.json")
            .then(response => response.json())
            .then(data => setJsonData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='NewsPart2 left_padding'>
            <div className='cards_wrapper'>
                {jsonData && (
                    jsonData.map(({id, title, header, button1, button2, date, photo}) =>{
                        return (
                            <div key={id} className="card">
                                <img src={photo} alt="photo" />
                                <h2>{header}</h2>
                                <p>{title}</p>
                                <button>{button1}</button>
                                <button>{button2}</button>
                                <span>{date}</span>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    );
}

export default NewsPart2;

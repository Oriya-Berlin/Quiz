import React from "react";
import Card from './card';


const CardGrid = ({cards}) => {

    return(
        <div className="card-grid">

            {
                cards.map(card => {
                return <Card card={card} key={card.id}/>
                })
            }

        </div>
    );

}

export default CardGrid;
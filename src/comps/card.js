import React, {useState} from "react";



const Card = ({card}) => {


    const [flip, setFlip] = useState(false);


    if(!flip){
        return(
            <div onClick={() => setFlip(!flip)} className="card">      
                <div className='front'>
                    {card.question}
                    <div className='card-options'>
                        {
                            card.options.map((option,index) => {
                                return <div className='card-single-option'>({index+1}) {option} </div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }else{ 

        return(
            <div onClick={() => setFlip(!flip)} className="card">
                <div className="back">{card.answer}</div>
            </div>
        )
    };


};


export default Card;
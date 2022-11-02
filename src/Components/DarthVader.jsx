import React,{ useState } from "react";


const DarthVader = ({data}) => {
    const[hidden, setHidden] = useState(true);

    const buttonPressed = () => {
        setHidden(false);
    }

    
    return (
        <>
            <div className="vader-container">
            
            <div className="right-box vader-background">


                
             </div>
            
            <div className="left-box">
                <h1 className="vader-title">{data.name}</h1>
                {!hidden ?   (
                <div className="vader-text">
                    Height: {data.height} cm
                    <br />
                    Birth Year: {data.birth_year}
                    <br />
                    Gender: {data.gender}
                </div>
                 ) : (
                    ""
                )
                  
                }
                <button onClick={buttonPressed} className="button-meet">Meet me!</button>
            </div>
           
        </div>
        </>
    )
}
export default DarthVader;
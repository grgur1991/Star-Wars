import React,{ useState } from "react";

const C3Po = ({data}) => {
    const [hidden, setHidden] = useState(true);

    const buttonPressed = () => {
        setHidden(false);
    }
    
    return(
        <>
           <div className="c3Po-container">
            
            <div className="left-box">
                <h1 className="C3Po-title">{data.name}</h1>
                {!hidden ?   (
                <div className="C3Po-text">
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

            <div className="right-box C3Po-background">


                </div>
           
        </div>
        </>
    )
}
export default C3Po;
import React,{ useState } from "react";


const R2D2 =({data}) =>{
    const [hidden, setHidden] = useState(true);

       const buttonPressed = () => {
        setHidden(false);
       }

    return(
        <>
            <div className="r2d2-container">

            <div className="right-box r2d2-background">


             </div>
            
            <div className="left-box">
                <h1 className="r2d2-title">{data.name}</h1>
                {!hidden ?   (
                <div className="r2d2-text">
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
export default R2D2;
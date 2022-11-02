import React,{ useState } from "react";


const Anakin = ({data}) => {
    const [hidden, setHidden] = useState(true);

    const buttonPressed = () => {
        setHidden(false);
    }
    return (
        <>
        <div className="anakin-container">
            <div className="left-box">
                <h1 className="anakin-title">{data.name}</h1>
                {!hidden ?   (
                <div className="anakin-text">
                    Height:  {data.height} cm
                    <br />
                    Birth Year:  {data.birth_year}
                    <br />
                    Gender:  { data.gender}
                </div>

                ) : (
                    ""
                )
                  
                }
                <button onClick={buttonPressed} className="button-meet">Meet me!</button>
            </div>




            <div className="right-box anakin-background">


                
            </div>
        </div>
        </>
    )
}
export default Anakin;
import React, { useEffect, useState } from "react";
import Anakin from "./Anakin";
import C3Po from "./C3Po";
import DarthVader from "./DarthVader";
import Home from "./Home";
import './Main.css';
import R2D2 from "./R2-D2";
import axios from 'axios';

const Main = () => {
    
    const [url, setUrl] = useState(
        'https://swapi.dev/api/people/?format=json'
    ); 

    const [anakin, setAnakin] = useState();
    const [vader, setVader] = useState();
    const [c3Po, setC3Po] = useState();
    const [r2d2, setR2D2] = useState();


    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url)
            setAnakin(res.data.results[0])
            setVader(res.data.results[3])
            setC3Po(res.data.results[1])
            setR2D2(res.data.results[2])
        }
        fetch();
    },[url]

    )

    return (
        <> 

           <Home />
           {!anakin ? <p>Loading...</p>:<Anakin data={anakin} />}
           {!vader ? <p>Loading...</p>:<DarthVader data={vader} />}
           {!c3Po ? <p>Loading...</p>:<C3Po  data={c3Po}/>}
           {!r2d2 ? <p>Loading...</p>:<R2D2 data={r2d2}/>}

        </>
    )
}
export default Main;
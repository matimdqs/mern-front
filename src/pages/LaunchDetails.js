import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function LaunchDetails() {
    const { flight_id } = useParams();
    const [launchDetails, setLaunchDetails] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/"+flight_id)
            .then(data => data.json())
            .then(json => {
                setLaunchDetails(json);
                console.log(launchDetails);
            });
    }, []);

    return(
        <h2>Launch Details {flight_id} </h2>
    );
}
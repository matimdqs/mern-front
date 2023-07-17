import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function LaunchDetails() {
    const { flight_number } = useParams();
    const [launchDetails, setLaunchDetails] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/"+flight_number)
            .then(data => data.json())
            .then(json => {
                setLaunchDetails(json);
            });
    }, []);

    return(
        <h2>Launch Details {flight_number}</h2>
    );
}
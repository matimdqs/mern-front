import { useParams } from 'react-router-dom';

export default function LaunchDetails() {
    const { flight_id } = useParams();

    /*
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/launches")
            .then(data => data.json())
            .then(json => {
            setApiLaunches(json);
            setLaunches(json); 
            });
        }, []);    
    */

    return(
        <h2>Launch Details {flight_id} </h2>
    );
}
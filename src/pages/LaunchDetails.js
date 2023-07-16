import { useParams } from 'react-router-dom';

export default function LaunchDetails() {

    const { id } = useParams();

    return(
        <h2>Launch Details {id} </h2>
    );
}
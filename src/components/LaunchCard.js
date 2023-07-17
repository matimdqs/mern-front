import Axios from 'axios';

const LaunchCard = ({ launch }) => {
    const handleSubmit = async () => {
        try {
          const response = await Axios.post('http://localhost:5000/api/v1/favorites', {
            user_id: 33,
            launch_id: launch.flight_number
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    }

    return(
        <div className="card">
            <img src={launch.mission_patch} alt="" /> {launch.mission_name}
            <hr />
            <a href={`/launch/${launch.flight_number}`} target="_blank">See More</a>
            <form onSubmit={handleSubmit}>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default LaunchCard;
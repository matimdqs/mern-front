import Axios from 'axios';

const LaunchCard = ({ launch }) => {
    const handleSubmit = async () => {
        try {
          const response = await Axios.post('http://localhost:5000/api/v1/favorites', {
            user_id: 33,
            launch_id: launch.flight_number
          });
        } catch (error) {
          console.error(error);
        }
    }

    return(
        <div class="mb-6">
          <div class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img src={launch.mission_patch} class="h-full w-full object-cover object-center" />
            </div>
            <h3 class="mt-6 mb-3 text-sm text-gray-500">
              <a href={`/launch/${launch.flight_number}`} target="_blank">
                <span class="absolute inset-0"></span>
                {launch.mission_name}
              </a>
            </h3>
            <p class="text-sm py-2">{launch.details}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <button
            type="submit"
            class="inline-block rounded bg-indigo-300 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Save
            </button>
          </form>
        </div>
    );
}

export default LaunchCard;
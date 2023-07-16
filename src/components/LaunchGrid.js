const LaunchGrid = ({ launches }) => {
  return (
    <>
      <div className="container">
        {launches.map((launch, index) => {
          return (
            <div key={launch.flight_number}>
                <img src={launch.mission_patch} alt="" /> {launch.mission_name}
                <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LaunchGrid;

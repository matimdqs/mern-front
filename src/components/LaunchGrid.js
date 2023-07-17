import LaunchCard from "./LaunchCard";

const LaunchGrid = ({ launches }) => {
  return (
    <div className="container">
      {launches.map((launch, index) => {
        return (
          <LaunchCard key={index} launch={launch} />
        );
      })}
    </div>
  );
};

export default LaunchGrid;
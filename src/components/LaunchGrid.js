import LaunchCard from "./LaunchCard";

const LaunchGrid = ({ launches }) => {
  return (
    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      {launches.map((launch) => {
        return (
          <LaunchCard launch={launch} />
        );
      })}
    </div>
  );
};

export default LaunchGrid;
import React, { useState, useEffect } from "react";
import SectionTitle from "./../components/SectionTitle";
import Nav from "./../components/Nav";
import Search from "./../components/Search";
import Pagination from "./../components/Pagination";
import LaunchGrid from "./../components/LaunchGrid";

export default function Launches() {
  const [apiLaunches, setApiLaunches] = useState([]);
  const [launches, setLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [launchesPerPage] = useState(6);
  const [filterFavs, setFilterFavs] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/launches")
      .then(data => data.json())
      .then(json => {
        setApiLaunches(json);
        setLaunches(json); 
      });
  }, []);

  const setLaunchesByFilter = (launches, filterFavs, searchTerm = "") => {
    let updatedLaunches;
  
    if (filterFavs) {
      updatedLaunches = launches.filter((launch) => launch.favorite === true);
    } else {
      updatedLaunches = launches;
    }
  
    if (searchTerm !== "") {
      updatedLaunches = updatedLaunches.filter((launch) =>
        launch.mission_name.toLowerCase().includes(searchTerm)
      );
    }
  
    setLaunches(updatedLaunches);
  };
  
  const allLaunches = () => {
    setFilterFavs(false);
    setLaunchesByFilter(apiLaunches, false);
  };
  
  const filterFavLaunches = () => {
    setFilterFavs(true);
    setLaunchesByFilter(apiLaunches, true);
  };
  
  const searchLaunches = (event) => {
    setLaunchesByFilter(apiLaunches, filterFavs, event.target.value.toLowerCase());
  };

  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunches = launches?.slice(indexOfFirstLaunch, indexOfLastLaunch);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8"> 
        <SectionTitle />
        <Nav allLaunches={allLaunches} filterFavLaunches={filterFavLaunches} />
        <Search onChange={searchLaunches} />
        <LaunchGrid launches={currentLaunches} />        
        <Pagination
          launchesPerPage={launchesPerPage}
          totalLaunches={launches?.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};
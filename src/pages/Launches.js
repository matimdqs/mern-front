import React, { useState, useEffect } from "react";
import Pagination from "./../components/Pagination";
import Search from "./../components/Search";
import Nav from "./../components/Nav";
import Title from "./../components/Title";
import LaunchGrid from "./../components/LaunchGrid";

export default function Launches() {
  const [apiLaunches, setApiLaunches] = useState([]);
  const [launches, setLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [launchesPerPage] = useState(6);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/launches")
      .then(data => data.json())
      .then(json => {
        setApiLaunches(json);
        setLaunches(json); 
      });
  }, []);

  // search launches
  const handleSearchInput = event => {
    let updatedLaunches = apiLaunches.filter((launch) => {
        return launch.mission_name.toLowerCase().includes(event.target.value);
    });
    setLaunches(updatedLaunches);
  };

  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunches = launches?.slice(indexOfFirstLaunch, indexOfLastLaunch);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
        <Title></Title>
        <Nav></Nav>
        <Search onChange={handleSearchInput} />
        <LaunchGrid launches={currentLaunches} />        
        <Pagination
            launchesPerPage={launchesPerPage}
            totalLaunches={launches?.length}
            paginate={paginate}
        />
    </div>
  );
};
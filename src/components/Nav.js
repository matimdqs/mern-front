const Nav = ({allLaunches, filterFavLaunches}) => {  
    return (
        <div className="menu">
            <ul>
                <li onClick={() => allLaunches()}>ALL</li>
                <li onClick={() => filterFavLaunches()}>FAVOURITES</li>
            </ul>
        </div>
    )
  }

  export default Nav;
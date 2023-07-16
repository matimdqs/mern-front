const Pagination = ({ launchesPerPage, totalLaunches, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalLaunches / launchesPerPage); i++) {
    pageNumbers.push(i)
  } 

  return (
    <div className = "pagination">
        <ul>
            {pageNumbers.map(number => (
            <li key = {number}>
                <a onClick = {() => paginate(number)} href = "#">{number}</a>
            </li>
            ))}
        </ul>
    </div>
  )
}
export default Pagination;
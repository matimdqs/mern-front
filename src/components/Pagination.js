const Pagination = ({ launchesPerPage, totalLaunches, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalLaunches / launchesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Total of <span class="font-medium">{totalLaunches}</span> results
          </p>
        </div>
        <div>
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {pageNumbers.map(number => (
              <a onClick = {() => paginate(number)} href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">{number}</a>
            ))}
          </nav>
        </div>
      </div>
    </div>            
  );
};

export default Pagination;
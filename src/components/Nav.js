const Nav = ({allLaunches, filterFavLaunches}) => {  
    return (
        <nav class="relative flex w-full flex-wrap items-center justify-between bg-primary py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                <nav class="w-full rounded-md" aria-label="breadcrumb">
                    <ol class="list-reset ml-2 flex">
                        <li onClick={() => allLaunches()} class="cursor-pointer text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200">
                            All
                        </li>
                        <li>
                        <span class="mx-2 text-neutral-500 dark:text-neutral-200"
                            >/</span>
                        </li>
                        <li onClick={() => filterFavLaunches()} class="cursor-pointer text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200">
                            Favourites
                        </li>
                    </ol>
                </nav>
            </div>
        </nav>
    )
}
export default Nav;
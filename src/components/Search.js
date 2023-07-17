const Search = ({ onChange }) => {
    return (
        <div class="flex items-center justify-between bg-white sm:px-0 my-8">
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div></div>
                <div>
                    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <input onChange={onChange} type="text" class="min-w-0 flex-auto rounded-md border-slate-600 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Search flight name" />
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Search;
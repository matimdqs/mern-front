const Search = ({ onChange }) => {
    return (
        <div>
        <input
            type="text"
            autoFocus={true}
            placeholder="search launches"
            onChange={onChange}
        />
        </div>
    );
};

export default Search;
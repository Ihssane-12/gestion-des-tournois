function SearchBar(props) {
  const searchQuery = props.searchQuery;
  const onChangeSearch = props.onChangeSearch;

  let inputClass = "w-full pl-10 pr-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-sm placeholder:text-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-white/60";

  return (
    <div className="mb-6">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 text-sm">
          <i className="fa-solid fa-magnifying-glass" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onChangeSearch(e.target.value)}
          placeholder="Search"
          className={inputClass}
        />
      </div>
    </div>
  );
}

export default SearchBar;


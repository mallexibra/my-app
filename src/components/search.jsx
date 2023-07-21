const Search = () => {
  return (
    <label
      className="flex w-full my-5 justify-center items-center p-2 rounded-md border-2 border-sky-600 gap-3 bg-stone-700"
      htmlFor="search"
    >
      <img className="w-5 h-5" src="/search.png" alt="icon-search" />
      <input
        className="w-full placeholder:italic placeholder:text-white/30 bg-transparent border-none outline-none"
        placeholder="Search lksdjsklfsd"
        type="text"
        name="search"
        id="search"
      />
    </label>
  );
};

export default Search;

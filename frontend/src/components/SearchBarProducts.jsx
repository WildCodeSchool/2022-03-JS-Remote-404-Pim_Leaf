function SearchBarProducts({ searchInput, setSearchInput }) {
  const handleChange = (e) => {
    const input = e.target.value;
    const inputUp = input.charAt(0).toUpperCase() + input.slice(1);
    setSearchInput(inputUp);
  };

  return (
    <form action="search">
      <div className=" flex flex-row justify-center">
        <input
          className="bg-lightGrey h-10 w-1/3 pl-5 rounded-tl-full rounded-bl-full text-m focus:outline-none text-darkBlue"
          type="search"
          name="search"
          placeholder="Rechercher"
          onChange={handleChange}
          value={searchInput}
        />
        <button
          type="submit"
          className="bg-lightGrey flex justify-center w-10 rounded-tr-full rounded-br-full"
        >
          <img
            src="../src/assets/search_icon.svg"
            alt="icon recherche"
            className="h-10 w-4"
          />
        </button>
      </div>
    </form>
  );
}

export default SearchBarProducts;

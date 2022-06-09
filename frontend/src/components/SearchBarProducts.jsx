import React, { useState } from "react";

function SearchBarProducts() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form action="search">
      <div className=" flex flex-row justify-center mb-10 mt-20">
        <input
          className="bg-lightGrey h-10 w-1/3 pl-5 rounded-tl-full rounded-bl-full text-m focus:outline-none"
          type="search"
          name="search"
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
            className="h-10 w-5"
          />
        </button>
      </div>
    </form>
  );
}

export default SearchBarProducts;

import React from "react";

function SearchBarSuppliersDetails() {
  return (
    <div className=" bg-white  ">
      <div className="flex item-center rounded-full mx-auto w-[70%] sm:w-[40%] h-[40px] bg-darkBlue/10 ">
        <input
          type="search"
          className="bg-lightGrey rounded-full outline-none flex flex-grow placeholder-darkBlue/70 text-darkBlue indent-3"
          placeholder="Recherche"
        />
        <img
          src="../src/assets/search_icon.png"
          alt=""
          className="h-4 ml-3 mb-3 mt-3 mr-3 "
        />
      </div>
    </div>
  );
}

export default SearchBarSuppliersDetails;

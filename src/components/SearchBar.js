import React from "react";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");



  const handleSearch = (e) => {
    e.preventDefault();

  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-white grid grid-cols-12" onSubmit={handleSearch}>
        <input
          className="p-4 m-1 col-span-9 text-xl"
          type="text"
          placeholder="Search Movies or Shows"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className=" col-span-3 py-2 px-4 m-3 bg-cyan-900 rounded-lg text-white "
          type="submit"
        >
          <span >Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

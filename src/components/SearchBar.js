import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a product..."
        onChange={(e) => setSearchTerm(e.target.value)}  // Mise à jour du terme de recherche
      />
    </div>
  );
};

export default SearchBar;

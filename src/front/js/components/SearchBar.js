import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <form className="d-flex me-3" onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar productos, categorías, tags..."
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;

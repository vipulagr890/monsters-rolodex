import React from "react";
import "./search-box.styles.css";

export const SearchBar = ({ placeholder, handleChange  }) => (
    <input className="search"
        type="search"
        placeholder={ placeholder }
        onChange={ handleChange }
    />
);
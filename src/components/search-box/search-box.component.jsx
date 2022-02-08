import React from 'react';
import './search-box.style.css';

export const SearchBox = ({ placeholder, handleChange}) => (
    <input placeholder= { placeholder }
        type='search' 
        onChange={handleChange} />
);
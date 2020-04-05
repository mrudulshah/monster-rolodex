import React from 'react';
import './search.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
  <input
    placeholder={placeholder}
    type="search"
    className='search'
    onChange={handleChange}
  />
);

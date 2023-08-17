import React from "react";

const SearchBar = ({className}) => {
    return (
    <form action="" className={`form-inline search-form ${className}`}>
        <input type="text" placeholder="Search Product" className="form-control" />
        <button className="search-btn">Search</button>
    </form>
)
}


export default SearchBar;
import React from 'react'; 
import './chatheader.style.css';

const Search = ({ conversations }) => {
    let searchInput = null; 
        searchInput = <input type="text" placeholder="Search" />; 
    return (
        <div className="box-shadow" id="search-container">
            { searchInput }
        </div>
    );
}

export default Search;
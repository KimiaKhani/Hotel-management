// import { useState } from "react";


// function SearchBar() {
//     const [query, setQuery] = useState("");

//     const handleclick=()=>{
//     console.log(query);
//     }
//     return (
//         <div className="App">
//         <label onClick={handleclick}>Search</label>
//         <input type="text" onChange={(e) => setQuery(e.target.value)} />
//         </div>
//     );
//     }
// export default SearchBar
import React, { useState } from 'react';
import './searchbar.css'; // Make sure the file name and import are consistent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useState('');

  const handleSearchClick = () => {
    setIsActive(true);
    if (inputValue !== '') {
      setSearchData(`You just typed: ${inputValue}`);
    } else {
      setSearchData('');
    }
  };

  const handleCancelClick = () => {
    setIsActive(false);
    setInputValue('');
    setSearchData('');
  };

  return (
    <div className={`searchbox-container ${isActive ? 'searchbox-active' : ''}`}>
      <input
        type="text"
        placeholder="Type to search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`searchbox-input ${isActive ? 'searchbox-active' : ''}`} 
      />
      <div className="searchbox-search-icon" onClick={handleSearchClick}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className={`searchbox-cancel-icon ${isActive ? 'searchbox-active' : ''}`} onClick={handleCancelClick}> 
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="searchbox-search-data">{searchData}</div>
    </div>
  );
};

export default SearchBox;


import React, { useState } from 'react';
import './searchbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({result , token}) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useState('');
  
  const id = inputValue;
  

  const handleSearchClick =async() => {
    setIsActive(true);
    if (inputValue !== '') {
      setSearchData(`You just typed: ${inputValue}`);
      console.log(inputValue);
      console.log(result);
      if (result === 1) {
        const fullUrl = `http://127.0.0.1:8000/admin/room/get_room/${id}`;
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Credentials':true
        
          },
        };
        axios.get(fullUrl,config)
          .then(function (response) {
              console.log(response.data);
             
              // navigate(`/admin/room/get_room/${id}`, { 
              //   state2: { 
              //       "id": response.data.id ,
              //       "bed_number": response.data.bed_number ,
              //       "price": response.data.price ,
              //       "is_taken": response.data.is_taken
              //   } 
              // });
            })
          .catch(function (error) {
              
              console.log('Error fetching room data:', error);});
      }

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
    <div className={`searchbox-container ${isActive ? 'searchbox-active' : 'anima'}`}>
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


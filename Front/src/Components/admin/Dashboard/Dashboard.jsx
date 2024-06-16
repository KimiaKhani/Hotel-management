import React, { useState } from "react";
import './dashboard.css'; 
import './searchbar.css'; 
import AdminAllRoomsPage from "../rooms/adminRoom";
import AdminAllCustomersPage from "../users/adminUsers";
import AdmingAddRoomsPage from "../addRooms/AddRoom";
import { useLocation } from 'react-router-dom';
import Room from "../emptyRooms/Rooms";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ReservedRooms from "../reserved room/ReservedRoom";

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



const AdminDashboard = () => {
  const location = useLocation();
  const [ask, setAsk] = useState(0);
  let token;

  if (location.state) {
    token = location.state.token;
  }
  // console.log(token);
  const handleClickDashboard =()=> setAsk(0);
  const handleClickUser = () => setAsk(1);
  const handleClickRooms = () => setAsk(2);
  const handleClickAddRoom = () => setAsk(3);
  const handleClickAddBooking = () => setAsk(4);
  const handleClicAllBooking=()=> setAsk(5);
  
  const renderContent = () => {
    switch(ask) {
      case 1:
        return (<>
          <div className="d-flex  justify-content-center align-items-center">
            <SearchBox result={ask} token={token}></SearchBox>
          </div>
          <AdminAllCustomersPage />
        </>);
      case 2:
        return (<>
          <div className="d-flex  justify-content-center align-items-center">
            <SearchBox></SearchBox>
          </div>
          <AdminAllRoomsPage result={ask}  />
        </>);
      case 3:
        return (<>
          <AdmingAddRoomsPage token={token} />
        </>);
   
      case 4:
        return (<>
          <div className="d-flex  justify-content-center align-items-center">
            <SearchBox></SearchBox>
          </div>
          <Room/>
        </>);
      case 5:
        return (<>
          <div className="d-flex  justify-content-center align-items-center">
            <SearchBox></SearchBox>
          </div>
          <ReservedRooms></ReservedRooms>
        </>);
      default:
        return <h1 className="fw-bold" style={{marginTop:'20vh'}}>hi... 👋 <br/>Welcome to Admin Panel</h1>;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="bg-nav">
        <h3 className="bg-glight mb-3">BOOKING HOTEL</h3>
        <div>
          <button className={`btn btn-outline-light dash mb-2 w-100 ${ask === 0 ? 'btn-active' : ''}`} onClick={handleClickDashboard}>
            Dashboard
          </button>
          <p className="bg-glight">Booking</p>
          <button className={`btn btn-outline-light btn-sm mb-1 w-100 ${ask === 5 ? 'btn-active' : ''}`} onClick={handleClicAllBooking}>
            All bookings
          </button>
          <button className={`btn btn-outline-light btn-sm mb-3 w-100 ${ask === 4 ? 'btn-active' : ''}`} onClick={handleClickAddBooking}>
            Add booking
          </button>
          <p className="bg-glight">Customer</p>
          <button className={`btn btn-outline-light btn-sm mb-1 w-100 ${ask === 1 ? 'btn-active' : ''}`} onClick={handleClickUser}>
            All customers
          </button>
          <p className="bg-glight">Rooms</p>
          <button className={`btn btn-outline-light btn-sm mb-1 w-100 ${ask === 2 ? 'btn-active' : ''}`} onClick={handleClickRooms}>
            All rooms
          </button>
          <button className={`btn btn-outline-light btn-sm mb-1 w-100 ${ask === 3 ? 'btn-active' : ''}`} onClick={handleClickAddRoom}>
            Add rooms
          </button>
        </div>
      </div>
   
      <div className="content-area">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;

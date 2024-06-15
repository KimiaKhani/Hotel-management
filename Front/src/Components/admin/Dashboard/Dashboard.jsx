import React, { useState } from "react";
import './dashboard.css'; 
import AdminAllRoomsPage from "../rooms/adminRoom";
import AdminAllCustomersPage from "../users/adminUsers";
import AdmingAddRoomsPage from "../addRooms/AddRoom";
import { useLocation } from 'react-router-dom';
import Room from "../emptyRooms/Rooms";
import SearchBox from "../../searchbar/Searchbar";

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
          <AdminAllRoomsPage />
        </>);
      case 3:
        return (<>
          <div className="d-flex  justify-content-center align-items-center">
            <SearchBox></SearchBox>
          </div>
          <AdmingAddRoomsPage token={token} />
        </>);
   
      case 4:
        return (<>
          <div className="d-flex  justify-content-center align-items-center">
            <SearchBox></SearchBox>
          </div>
          <Room/>
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
          <button className={`btn btn-outline-light btn-sm mb-1 w-100 ${ask === 5 ? 'btn-active' : ''}`}>
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

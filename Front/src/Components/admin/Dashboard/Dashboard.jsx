import React, { useState } from "react";
import './dashboard.css'; 
import AdminAllRoomsPage from "../rooms/adminRoom";
import AdminAllCustomersPage from "../users/adminUsers";
import AdmingAddRoomsPage from "../addRooms/AddRoom";
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const AdminDashboard = () => {
  const location = useLocation();
  const [ask, setAsk] = useState(0);
  let token;

  if (location.state) {
    token = location.state.token;
  }
  console.log(token);
  const handleClickUser = () => setAsk(1);
  const handleClickRooms = () => setAsk(2);
  const handleClickAddRoom = async() => setAsk(3);

  

  const renderContent = () => {
    switch(ask) {
      case 1:
        return <AdminAllCustomersPage />;
      case 2:
        return <AdminAllRoomsPage />;
      case 3:
        return <AdmingAddRoomsPage token={token}/>;
      default:
        return <h1>سلام... 👋 <br/>به پنل ادمین خوش اومدی</h1>;
    }
  };

  return (
    <div className="d-flex flex-column flex-md-row min-vh-100">
      <div className="bg-nav col-12 col-md-2 p-3">
        <h3 className="bg-glight mb-3">BOOKING HOTEL</h3>
        <div>
          <button className="btn btn-outline-light dash mb-2 w-100">Dashboard</button>
          <p className="bg-glight">Booking</p>
          <button className="btn btn-outline-light btn-sm mb-1 w-100">All bookings</button>
          <button className="btn btn-outline-light btn-sm mb-3 w-100">Add booking</button>
          <p className="bg-glight">Customer</p>
          <button className="btn btn-outline-light btn-sm mb-1 w-100" onClick={handleClickUser}>All customers</button>
          <p className="bg-glight">Rooms</p>
          <button className="btn btn-outline-light btn-sm mb-1 w-100" onClick={handleClickRooms}>All rooms</button>
          <button className="btn btn-outline-light btn-sm mb-1 w-100" onClick={handleClickAddRoom}>Add rooms</button>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center col-md-9 p-5">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;

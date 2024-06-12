import React from "react";
import './dashboard.css';
import {  useState,useEffect } from 'react' 

const DashboardNav = () => {
  
    return (
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <div className="bg-nav p-3" style={{ width: "300px" }}>
          <h3 className="bg-glight mb-3">BOOKING HOTEL</h3>
          <div className="mb-4">
            <button className="btn btn-light dash mb-2 w-100">Dashboard</button>
          </div>
          <div className="mb-2">
            <p className="bg-glight">Booking</p>
            <button className="btn btn-light btn-sm mb-1 w-100">All bookings</button>
            <button className="btn btn-light btn-sm mb-3 w-100">Add booking</button>
          </div>
          <div className="mb-2">
            <p className="bg-glight">Customer</p>
            <button className="btn btn-light btn-sm mb-1 w-100" onClick={() => handleClickUser()} >All customers</button>
          </div>
          <div className="mb-2">
            <p className="bg-glight">Rooms</p>
            <button className="btn btn-light btn-sm mb-1 w-100">All rooms</button>
          </div>
        </div>
      </div>
    );
  

};

export default DashboardNav;

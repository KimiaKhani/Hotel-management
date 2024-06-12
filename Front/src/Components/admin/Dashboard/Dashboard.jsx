import React from "react";
import './dashboard.css';
import AdminAllRoomsPage from "../rooms/adminRoom";
import {  useState,useEffect } from 'react' 
import axios from 'axios'
import AdminAllCustomersPage from "../users/adminUsers";
import AdmingAddRoomsPage from "../addRooms/AddRoom";

const AdminDashboard = () => {
  const [ask,setask]=useState(0)

  const handleClickUser = () =>{
    setask(1)
  }

  const handleClickRooms = () =>{
    setask(2)
  }
  const handleClickAddRoom = () =>{
    setask(3)
  }
  if (ask==0) {
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
            <button className="btn btn-light btn-sm mb-1 w-100" onClick={() => handleClickRooms()}>All rooms</button>
            <button className="btn btn-light btn-sm mb-1 w-100" onClick={() => handleClickAddRoom()}>Add rooms</button>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-grow-1 p-5 ">
          <h1>سلام... 👋 <br></br>به پنل ادمین خوش اومدی</h1>
        </div>
      </div>
    );
  }
  if (ask==1) {
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
            <button className="btn btn-light btn-sm mb-1 w-100" onClick={() => handleClickRooms()}>All rooms</button>
            <button className="btn btn-light btn-sm mb-1 w-100" onClick={() => handleClickAddRoom()}>Add rooms</button>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-grow-1 p-5 ">
      <AdminAllCustomersPage/>
        </div>
      </div>);
  }
  if (ask==2) {
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
            <button className="btn btn-light btn-sm mb-1 w-100" onClick={() => handleClickRooms()}>All rooms</button>
            <button className="btn btn-light btn-sm mb-1 w-100"  onClick={() => handleClickAddRoom()}>Add rooms</button>
          </div>
          
        </div>
        
        <div className="d-flex justify-content-center align-items-center flex-grow-1 p-5 ">
      <AdminAllRoomsPage/>
        </div>
      </div>);
  }
  if (ask==3) {
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
            <button className="btn btn-light btn-sm mb-1 w-100" onClick={() => handleClickRooms()}>All rooms</button>
            <button className="btn btn-light btn-sm mb-1 w-100"  onClick={() => handleClickAddRoom()}>Add rooms</button>
          </div>
          
        </div>
        
        <div className="d-flex justify-content-center align-items-center flex-grow-1 p-5 ">
      <AdmingAddRoomsPage/>
        </div>
      </div>);
  }
 
};

export default AdminDashboard;

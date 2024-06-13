import React from "react";
import TextInput from "./TextInput"; 
import './addRooms.css';
import axios from 'axios';
import { useState } from "react";
const INPUTS = [
  { label: "Room ID", placeholder: "Room ID", name: "room_id", className: "col-12 col-md-12" },
  { label: "Room Type", placeholder: "Room Type", name: "room_type", className: "col-12 col-md-12" },
  { label: "Bed Count", placeholder: "Bed Count", name: "bed_number", className: "col-12 col-md-12" },
  { label: "Price", placeholder: "Price", name: "price", className: "col-12 col-md-12" },
  { label: "Status", placeholder: "Status", name: "status", className: "col-12 col-md-12" },
  {
    label: "Room Image",
    placeholder: "Upload Room Image",
    name: "room_image",
    className: "col-12 col-md-3", 
    type: "file",
  },
];



const AdmingAddRoomsPage = ({token}) => {


  const [formData, setFormData] = useState({
    bed_number: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleClick = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/admin/room/add_room/',
        data: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
    } catch (error) {
      console.log('Error:', error.response);
    }
  };
  
    return (
      <div className="container py-4 col-md-8">
        <h1 className="text-center mb-4 fw-bold">Add Room</h1>
        <div className="card round-5">
          <form className="card-body row g-3 ">
            {INPUTS.map((input) => (
              <TextInput key={input.name} {...input} value={formData[input.name]} onChange={handleChange} />
            ))}
            <div className="col-12 text-center mt-3">
              <button type="button" className="btn btn-outline-secondary bh w-100 w-md-auto" onClick={handleClick}>Add Room</button>
            </div>
          </form>
        </div>
      </div>
    );
    
};

export default AdmingAddRoomsPage;

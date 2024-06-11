import React from "react";
import TextInput from "./TextInput"; // Ensure the path matches your project structure
import './addRooms.css';
const INPUTS = [
  { label: "Room ID", placeholder: "Room ID", name: "room_id" },
  { label: "Room Type", placeholder: "Room Type", name: "room_type" },
  { label: "Bed Count", placeholder: "Bed Count", name: "bed_count" },
  { label: "Price", placeholder: "Price", name: "price" },
  { label: "Status", placeholder: "Status", name: "status" },
  {
    label: "Room Image",
    placeholder: "Upload Room Image",
    name: "room_image",
    className: "col-12 col-lg-6", // Adjusting for Bootstrap grid
    type: "file",
  },
];

const AdmingAddRoomsPage = () => {
  return (
    <div className="container py-4 d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center mb-4">Add Room</h1>
      <div className="card ta">
        <form className="card-body row g-3">
          {INPUTS.map((input) => (
            <TextInput key={input.name} {...input} />
          ))}
          <div className="col-12">
            <button type="button" className="btn btn-success">Add Room</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmingAddRoomsPage;

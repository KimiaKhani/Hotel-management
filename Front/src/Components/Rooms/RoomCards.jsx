// RoomCard.js
import React from 'react';
import './RoomCard.css'; 
import Image from './images/2.jpeg';

const RoomCard = ({ room }) => {
  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="d-flex justify-content-center col-md-4">
          <img src={Image} className="img-fluid rounded-start" alt={room.title} />
        </div>
        <div className="col-md-8 ">
          <div className="card-body d-flex justify-content-center align-items-center">
            <h5 className="card-title">{room.title}</h5>
            <p className="card-text">Room capacity: <i className="bi bi-people-fill"></i> {room.capacity}</p>
            <p className="card-text">Room size: {room.size} square meters</p>
            <p className="card-text">
              <strong>Price per night: {room.price} Tomans</strong>
            </p>
            <button className="b btn ">رزرو</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

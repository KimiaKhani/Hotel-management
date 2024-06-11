import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomCard from './RoomCards';
import './Room.css';



const Room= () => {
  const rooms = [
    {
      title: 'Royal One Bedroom Suite',
      capacity: '1x (single bed) 2x (double bed)',
      size: 125,
      price: '7,000,000',
   
    },
    {
      title: 'Signature Suite',
      capacity: '1x (single bed) 2x (double bed)',
      size: 90,
      price: '5,700,000',
    }
    ,    {
      title: 'Royal One Bedroom Suite',
      capacity: '1x (single bed) 2x (double bed)',
      size: 125,
      price: '7,000,000',
   
    },
    {
      title: 'Signature Suite',
      capacity: '1x (single bed) 2x (double bed)',
      size: 90,
      price: '5,700,000',
    },
    
  ];

  return (
    <div className="container my-4">
      <h1 className='my-5 room-title'>اتاق های موجود در هتل</h1>
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
  );
};

export default Room;


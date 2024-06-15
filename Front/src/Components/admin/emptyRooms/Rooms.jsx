import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomCard from './RoomCards';
import './Room.css';
import axios from 'axios';



const Room= () => {

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/room/get_all_rooms'); 
        setRooms(response.data); 
        setLoading(false); 
        if (response.status === 200) {
          setLoading(true);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log("shashhhhhhhhhhhh");
        console.log(error);
        setError(error.message);
        setLoading(false); 
      }
    };

    fetchRooms();
  }, []);
  return (
    <div className="container my-4">
      {loading==true ? (<h1 className='my-5 room-title fw-bold'>Empty Rooms</h1>) : <h1 className='my-5 room-title'>All rooms are already booked.</h1>}
      
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
  );
};

export default Room;


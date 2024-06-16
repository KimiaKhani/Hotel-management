import React, { useEffect, useState } from "react";
import axios from 'axios';

const ReservedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/reservations');
        console.log(response.data);
        setRooms(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleRowClick = (roomId) => {
    console.log(`Room ID: ${roomId}`);
    
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm round-5">
        <div className="card-header bg-light text-dark">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Rooms</h5>
            <button className="btn btn-outline-success">View All</button>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {loading? (
              <div className="text-center">
                <p>Loading...</p>
              </div>
            ) : error? (
              <div className="text-center">
                <p>Error: {error}</p>
              </div>
            ) : (
              <table className="table table-striped table-hover">
                <thead className="bg-light">
                  <tr>
                    <th className="text-white" scope="col">Room ID</th>
                    <th className="text-white" scope="col">Check in</th>
                    <th className="text-white" scope="col">Check out</th>
                    <th className="text-white" scope="col">Room Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room, index) => (
                    <tr key={index} className="bg-white" onClick={() => handleRowClick(room.id)}>
                      <td className="align-middle">{room.room_id}</td>
                      <td className="align-middle">{room.check_in}</td>
                      <td className="align-middle">{room.check_out}</td>
                      <td className="align-middle">{room.last_name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservedRooms;

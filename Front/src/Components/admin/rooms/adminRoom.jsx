import React, { useEffect, useState } from "react";
import axios from 'axios';
import './adminRooms.css';

const AdminAllRoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/room/get_all_rooms'); 
        setRooms(response.data); 
        setLoading(false); 
      } catch (error) {
        setError(error.message);
        setLoading(false); 
      }
    };

    fetchRooms();
  }, []);

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
            {loading ? (
              <div className="text-center">
                <p>Loading...</p>
              </div>
            ) : error ? (
              <div className="text-center">
                <p>Error: {error}</p>
              </div>
            ) : (
              <table className="table table-striped table-hover">
                <thead className="bg-light">
                  <tr>
                    <th className="text-white" scope="col">Room ID</th>
                    <th className="text-white" scope="col">Room Type</th>
                    <th className="text-white" scope="col">Bed Count</th>
                    <th className="text-white" scope="col">Price</th>
                    <th className="text-white" scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room, index) => (
                    <tr key={index} className="bg-white">
                      <td className="align-middle">{room.id}</td>
                      <td className="align-middle">VIP</td>
                      <td className="align-middle">{room.bed_number}</td>
                      <td className="align-middle">{Number(room.price).toLocaleString()} IRR</td>
                      <td className="align-middle">{room.is_taken==false ? "no" : "yes"}</td>
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

export default AdminAllRoomsPage;

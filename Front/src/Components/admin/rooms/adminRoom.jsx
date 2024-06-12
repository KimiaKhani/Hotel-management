import React from "react";
import { Link } from "react-router-dom";
import './adminRooms.css';

const tableDataRows = [
  [ "2", "Double", "2", 2000000, "R"],
  [ "4", "Single", "1", 2000000, "not R"],
  ["2", "Single", "2", 2000000, "R"],
  ["1", "VIP", "2", 2000000, "R"],
  [ "4", "Double", "1", 2000000, "not R"],
  ["2", "Single", "2", 2000000, "R"],
  ["2", "VIP", "2", 2000000, "R"],
  ["2", "Single", "2", 2000000, "R"],
];

const AdminAllRoomsPage = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-light text-dark">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Rooms</h5>
            <button className="btn btn-outline-success">View All</button>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="bg-light">
                <tr>
                  <th className="text-white" scope="col">Room ID</th>
                  <th className="text-white"scope="col">Room Type</th>
                  <th className="text-white" scope="col">Bed Count</th>
                  <th className="text-white" scope="col">Price</th>
                  <th className="text-white" scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {tableDataRows.map((row, index) => (
                  <tr key={index} className="bg-white">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="align-middle">
                        {cellIndex === 5 ? `${Number(cell).toLocaleString()} IRR` : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllRoomsPage;

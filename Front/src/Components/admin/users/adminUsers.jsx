import React from "react";
import { Link } from "react-router-dom";
import './adminUsers.css';

const tableDataRows = [
  ["1", "2", "Sara", "Alavi", "09907866554", "sara@gmail.com"],
  ["1", "2", "Mamad", "Rajabi", "98764452310", "mamad@gmail.com"],
  ["1", "2", "Alireza", "Ahmadi", "09336527312", "alireza@gmail.com"],
  ["1", "2", "Samad", "Khara", "09884632731", "samad@gmail.com"],
  ["1", "2", "Jalal", "Rajabi", "0896643821", "jalal@gmail.com"],
];

const AdminAllCustomersPage = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-light text-dark">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Customers</h5>
            <button className="btn btn-outline-secondary">View All</button>
          </div>
        </div>
        <div className="card-body " >
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="text-white">
                <tr >
                  <th className="text-white" scope="col">Booking ID</th>
                  <th className="text-white" scope="col">Customer ID</th>
                  <th className="text-white" scope="col">Name</th>
                  <th className="text-white" scope="col">Last Name</th>
                  <th className="text-white" scope="col">Phone Number</th>
                  <th className="text-white" scope="col">E-mail</th>
                </tr>
              </thead>
              <tbody>
                {tableDataRows.map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="align-middle">
                        {cell}
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

export default AdminAllCustomersPage;

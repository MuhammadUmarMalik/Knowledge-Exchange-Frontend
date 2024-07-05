// src/AdminPage.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";

const AdminPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch pending requests from the API
    axios
      .get("http://localhost:3333/api/pending-applications")
      .then((response) => {
        setRequests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the pending requests!",
          error
        );
        setLoading(false);
      });
  }, []);

  const handleApprove = (id) => {
    axios
      .post(`http://localhost:5000/api/approve-request/${id}`)
      .then((response) => {
        setRequests(requests.filter((request) => request.id !== id));
      })
      .catch((error) => {
        console.error("There was an error approving the request!", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-page">
      <h1>Pending Requests</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.name}</td>
              <td>{request.type}</td>
              <td>
                <button onClick={() => handleApprove(request.id)} className="admin-button">
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;

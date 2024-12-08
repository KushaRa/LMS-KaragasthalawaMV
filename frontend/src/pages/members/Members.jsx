import React, { useState, useEffect } from 'react';
import './Members.css'; // Link to the CSS file
import NavBar from '../../components/Navbar/navBar';
import axios from 'axios';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch members data
    axios.get('/api/members') // Adjust the API endpoint as needed
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching members:', error);
      });
  }, []);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className="members-container">
        {/* Sidebar Section */}
        <div className="sidebar">
          <button className="add-member-btn">Add Member</button>
          <div className="total-members">Total Members: {members.length}</div>
        </div>

        {/* Table Section */}
        <div className="table-section">
          {/* Search Bar Above Table */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for the member"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table */}
          <table>
            <thead>
              <tr>
                <th>Record Number</th>
                <th>Name</th>
                <th>Card Number</th>
                <th>Grade</th>
                <th>Index Number</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, index) => (
                <tr key={index}>
                  <td>{member.recordNumber}</td>
                  <td>{member.name}</td>
                  <td>{member.cardNumber}</td>
                  <td>{member.grade}</td>
                  <td>{member.indexNumber}</td>
                  <td>{member.phoneNumber}</td>
                  <td>{member.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Members;

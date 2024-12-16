import React, { useState, useEffect } from 'react';
import './Members.css'; // Link to the CSS file
import NavBar from '../../components/Navbar/navBar';
import axios from 'axios';
import AddMemberForm from './addMemberForm/AddMemberForm'; // Import the AddMemberForm component

const Members = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);

  // Fetch members from the backend
  const fetchMembers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/members");
      console.log("Fetched Members:", response.data);
      setMembers(response.data); // Set fetched members to state
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  // Fetch members on component mount
  useEffect(() => {
    fetchMembers();
  }, []);

  // Handle adding a new member
  const handleMemberAdded = (newMember) => {
    setMembers((prevMembers) => [...prevMembers, newMember]); // Update state with the new member
    fetchMembers(); // Re-fetch members to ensure the state matches the backend
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className="members-container">
        {/* Sidebar Section */}
        <div className="sidebar">
          <button
            className="add-member-btn"
            onClick={() => setShowAddMemberForm(true)} // Show the add member form
          >
            Add Member
          </button>
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
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
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

                  <td>{member.recordNumber || index + 1}</td> 
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

      {/* Conditionally render AddMemberForm */}
      {showAddMemberForm && (
        <AddMemberForm
          onClose={() => setShowAddMemberForm(false)} // Close the form
          onMemberAdded={handleMemberAdded} // Pass function to handle new member
        />
      )}
    </div>
  );
};

export default Members;

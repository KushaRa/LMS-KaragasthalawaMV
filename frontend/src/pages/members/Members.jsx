import React, { useState, useEffect } from 'react';
import './Members.css'; // Link to the CSS file
import NavBar from '../../components/Navbar/navBar';
import axios from 'axios';
import AddMemberForm from './AddMemberForm'; // Import the AddMemberForm component
import EditMemberForm from './EditMemberForm';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [editingMember, setEditingMember] = useState(false);

  // Get members from the backend
  const fetchMembers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/members");
      console.log('Members fetched:', response.data)
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  // Fetch members on component mount
  useEffect(() => {
    fetchMembers();
  }, []);

  // Handle adding a new member
  const handleMemberAdded = () => {
    fetchMembers(); // Re-fetch members to ensure the state matches the backend
  };

  // Handle save member after editing
  const handleSaveMember = async (updatedMember) => {
    try {
      await axios.put(`http://localhost:5000/api/members/${updatedMember._id}`, updatedMember);
      console.log('Member updated, re-fetching members...');
      fetchMembers(); // Re-fetch members to reflect the updated member
      setEditingMember(false);
      setSelectedMember(null);
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  // Handle delete member
  const handleDeleteMember = async (memberId) => {
    try {
      await axios.delete(`http://localhost:5000/api/members/${memberId}`);
      console.log('Member deleted, re-fetching members...');
      fetchMembers(); // Re-fetch members to ensure the state matches the backend
      setSelectedMember(null);
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  // Handle edit action
  const handleEditMember = (member) => {
    setSelectedMember(member);
    setEditingMember(true);
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className="members-container">
        <div className="sidebar">
          <button
            className="add-member-btn"
            onClick={() => setShowAddMemberForm(true)}
          >
            Add Member
          </button>
          <div className="total-members">Total Members: {members.length}</div>
        </div>

        <div className="table-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for the member"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{member.name}</td>
                  <td>{member.cardNumber}</td>
                  <td>{member.grade}</td>
                  <td>{member.indexNumber}</td>
                  <td>{member.phoneNumber}</td>
                  <td>{member.address}</td>
                  <td>
                    <button onClick={() => handleEditMember(member)}>Edit</button>
                    <button onClick={() => handleDeleteMember(member._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddMemberForm && (
        <AddMemberForm
          onClose={() => setShowAddMemberForm(false)}
          onMemberAdded={handleMemberAdded}
        />
      )}

      {editingMember && selectedMember && (
        <EditMemberForm
          member={selectedMember}
          onSave={handleSaveMember}
          onClose={() => setEditingMember(false)}
        />
      )}
    </div>
  );
};

export default Members;

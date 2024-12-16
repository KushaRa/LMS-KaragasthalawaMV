import React, { useState } from 'react';
import './AddMemberForm.css'; // Link to the CSS file
import axios from 'axios';

const AddMemberForm = ({ onClose, onMemberAdded }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    name: '',
    grade: '',
    indexNumber: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Form Data:", formData);
    try {
      // Send POST request to the backend
      const response = await axios.post("http://localhost:5000/api/members/add", formData);

      if (response.status === 201) {
        console.log('Member added successfully:', response.data.member);
        onMemberAdded(response.data.member); // Add the new member to the table
        onClose(); // Close the form modal
      } else {
        console.error('Failed to add member:', response.statusText);
      }
    } catch (error) {
      console.error('Error while adding member:', error.response?.data || error.message);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-modal-btn" onClick={onClose}>
          &times;
        </button>
        <h3>Add New Member</h3>
        <form onSubmit={handleSubmit} className="form-container">
          {/* First Row */}
          <div className="form-row">
            <div className="form-group">
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="12345..."
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Abcde..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="form-row">
            <div className="form-group">
              <label>Grade:</label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
              >
                <option value="">Select the grade</option>
                <option>Grade 6</option>
                <option>Grade 7</option>
                <option>Grade 8</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
                <option>Grade 11</option>
                <option>Grade 12</option>
              </select>
            </div>
            <div className="form-group">
              <label>Index Number:</label>
              <input
                type="text"
                name="indexNumber"
                placeholder="12345..."
                value={formData.indexNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="12345..."
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                placeholder="Abcde..."
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Add Member Button */}
          <button className="add-member-btn" type="submit">
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMemberForm;

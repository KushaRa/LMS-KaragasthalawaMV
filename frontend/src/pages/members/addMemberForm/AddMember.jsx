import React from 'react';
import './AddMemberForm.css'; // Link to the CSS file

const AddMemberForm = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-modal-btn" onClick={onClose}>
          &times;
        </button>
        <h3>Record Id: 10</h3>
        <div className="form-container">
          {/* First Row */}
          <div className="form-row">
            <div className="form-group">
              <label>Card Number:</label>
              <input type="text" placeholder="12345..." />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" placeholder="Abcde..." />
            </div>
          </div>

          {/* Section Title */}
          <h3>Member Information</h3>

          {/* Second Row */}
          <div className="form-row">
            <div className="form-group">
              <label>Grade:</label>
              <select>
                <option>Select the grade</option>
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
              <input type="text" placeholder="12345..." />
            </div>
          </div>

          {/* Third Row */}
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="text" placeholder="12345..." />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input type="text" placeholder="Abcde..." />
            </div>
          </div>

          {/* Add Member Button */}
          <button
            className="add-member-btn"
            onClick={() => console.log('Member Added!')}
          >
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberForm;

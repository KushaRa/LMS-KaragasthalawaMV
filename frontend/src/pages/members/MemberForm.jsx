//reusable form for adding or editing member details

import React, { useState } from "react";
import "./MemberForm.css";


//initialData: Pre-fills the form when editing a member
//onSave: A callback function when the form is submitted to save the data.
//onClose: A callback function to close the modal when the user is done or cancels.
//title: Dynamically sets the form’s title  "Add New Member" or "Edit Member".
const MemberForm = ({ initialData, onSave, onClose, title }) => {
  
  //If initialData exists (editing a member), it uses that data.
  const [formData, setFormData] = useState(initialData || {
    cardNumber: "",
    name: "",
    grade: "",
    indexNumber: "",
    phoneNumber: "",
    address: "",
  });

  //Tracks changes in each input field.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //Calls onSave with the current formData to handle saving or updating the member.
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };


  
  return (
    //Form Layout
    <div className="modal">
      <div className="modal-content">
        <button className="close-modal-btn" onClick={onClose}>
          &times;
        </button>
        <h3>{title}</h3>
        <form onSubmit={handleSubmit} className="form-container">
        
          <div className="form-row">
            <div className="form-group">
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
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
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Grade:</label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Index Number:</label>
              <input
                type="text"
                name="indexNumber"
                value={formData.indexNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
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
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="save-btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default MemberForm;

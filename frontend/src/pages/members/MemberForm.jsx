import React, { useState } from "react";
import "./MemberForm.css";

const MemberForm = ({ initialData, onSave, onClose, title }) => {
  const [formData, setFormData] = useState(initialData || {
    cardNumber: "",
    name: "",
    grade: "",
    indexNumber: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
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

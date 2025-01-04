import React from "react";
import axios from "axios"; // Import Axios for API requests
import MemberForm from "./MemberForm";

const AddMemberForm = ({ onClose, onMemberAdded }) => {
  const handleSave = async (newMember) => {
    try {
      // Make a POST request to the backend API
      const response = await axios.post("http://localhost:5000/api/members/add", newMember);

      if (response.status === 201) {
        console.log("Member added successfully:", response.data.member);
        onMemberAdded(response.data.member); // Add the new member to the parent state
        onClose(); // Close the modal
      } else {
        console.error("Failed to add member:", response.statusText);
      }
    } catch (error) {
      console.error("Error while adding member:", error.response?.data || error.message);
    }
  };

  return (
    <MemberForm
      title="Add New Member"
      onSave={handleSave} // Pass the save handler
      onClose={onClose}
    />
  );
};

export default AddMemberForm;

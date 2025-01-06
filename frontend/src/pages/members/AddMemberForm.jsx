//handling the addition of new members to the system.

import React from "react";
import axios from "axios"; // Import Axios for API requests
import MemberForm from "./MemberForm"; //form layout for collecting member data.

//onClose: A function from the parent (Members.js) to close the modal when the user is done.
//onMemberAdded: A function from the parent to update the member list after a new member is added.
const AddMemberForm = ({ onClose, onMemberAdded }) => {
  
  const handleSave = async (newMember) => {
    try {
      // Make a POST request to the backend API with the newMember data.
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
      onSave={handleSave} // Passes handleSave to handle form submission.
      onClose={onClose} //Passes onClose to close the form when the user cancels.
    />
  );
};

export default AddMemberForm;

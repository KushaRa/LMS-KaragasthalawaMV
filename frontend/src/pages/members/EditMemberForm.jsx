//rendering a form to edit an existing member's information.
//Instead of creating a separate edit form, MemberForm is reused with minor differences in data

import React from "react";
import MemberForm from "./MemberForm";

const EditMemberForm = ({ member, onSave, onClose }) => {
  return (
    <MemberForm
      title="Edit Member"
      initialData={member} //Pre-fills the form fields with the current member's information 
      onSave={onSave}
      onClose={onClose}
    />
  );
};

export default EditMemberForm;

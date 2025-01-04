import React from "react";
import MemberForm from "./MemberForm";

const EditMemberForm = ({ member, onSave, onClose }) => {
  return (
    <MemberForm
      title="Edit Member"
      initialData={member}
      onSave={onSave}
      onClose={onClose}
    />
  );
};

export default EditMemberForm;

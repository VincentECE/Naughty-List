import React, { useState } from "react";
import useStore from "../store.js";

//this component shows the delete and edit button if the person is not being modified. It shows a save and cancel button if the person is being modified

function ModifyPerson({ name, isEdit, setEditName }) {
  const deleteFromNaughtyList = useStore(
    (state) => state.deleteFromNaughtyListAndUpdate
  );

  return isEdit ? (
    <>
      <button type="button">Save</button>
      <button type="button"
      onClick={()=>{
        setEditName('');
      }}
      >Cancel</button>
    </>
  ) : (
    <>
      <button
        type="button"
        onClick={() => {
          deleteFromNaughtyList(name);
        }}
      >
        delete
      </button>
      <button
        type="button"
        onClick={() => {
          setEditName(name);
        }}
      >
        edit
      </button>
    </>
  );
}

export default ModifyPerson;

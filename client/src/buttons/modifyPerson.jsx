import React, { useState } from "react";
import useStore from "../store.js";

const deleteFromNaughtyList = useStore(
  (state) => state.deleteFromNaughtyListAndUpdate
);

//this component shows the delete and edit button if the person is not being modified. It shows a save and cancel button if the person is being modified

function modifyPerson({ name, isEdit, setEditName }) {
  // if (isEdit) {
  //   return (
  //     <>
  //       <button type="button">Save</button>
  //       <button type="button">Cancel</button>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <button
  //         type="button"
  //         onClick={() => {
  //           deleteFromNaughtyList(name);
  //         }}
  //       >
  //         delete
  //       </button>
  //       <button
  //         type="button"
  //         onClick={() => {
  //           setEditName(name);
  //         }}
  //       >
  //         edit
  //       </button>
  //     </>
  //   );
  // }

  return(<></>)
}

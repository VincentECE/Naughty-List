import React from "react";

export const Item = ({
  text,
  isEdit,
  title,
  handleEditSubmit,
}) => {
    return isEdit ? (
  <div>
    <form
      onSubmit={(e) => handleEditSubmit(e.target.value)}>
      <input type="text" value={text}/>
    </form>
  </div>
) : (<div>
    <p>{text} </p>
  </div>)
};

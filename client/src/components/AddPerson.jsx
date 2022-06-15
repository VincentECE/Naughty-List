import React from 'react';
import useStore from '../store.js';

function AddPerson() {
  return (
    <form className="form" onSubmit={()=>{useStore.addToNaughtyList}}>
      <label>Add a naughty person to the list: </label>
      <input type="text" name="name"  placeholder="Name" required/>
      <input type="text" name="description"  placeholder="Description" required/>

      <label>Naughty level:
      <select>
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
      </select>
      </label>
      <button type="submit" text="add person"/>
    </form>
  )
}

export default AddPerson;
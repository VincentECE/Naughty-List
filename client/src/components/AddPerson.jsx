import React, { useState } from 'react';
import useStore from '../store.js';

function AddPerson() {
  const addToNaughtyListAndUpdate = useStore((state) => state.addToNaughtyListAndUpdate);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [naughtyLevel, setNaughtyLevel] = useState('');

  const handleChangeName = (e) => {
    setName(event.target.value)
  }

  const handleChangeDescription = (e) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (e) => {
    addToNaughtyListAndUpdate(e);
    setName('');
    setDescription('');
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Add a naughty person to the list: </label>
      <input type="text" name="name"  placeholder="Name" required onChange={(e) => {handleChangeName(e)}} value={name}/>
      <input type="text" name="description"  placeholder="Description" required onChange={e => handleChangeDescription(e)} value={description}/>

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
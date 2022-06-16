import React from "react";
import useStore from "../store.js";
import { v4 as uuidv4 } from "uuid";

function NaughtyList() {
  const list = useStore((state) => state.naughtyList);
  return list.length > 0 ? (
    <>
      <div className="name list-details">
        <h2>Name</h2>
        {list.map((person) => {
          return (
            <div className="name-buttons" key={uuidv4()}>
            <button type='button'>delete</button>
            <button type='button'>edit</button>
          <p >{person.name} </p>
          </div>
          )
        })}
      </div>
      <div className="description list-details">
        <h2>Description</h2>
        {list.map((person) => {
          return <p key={uuidv4()}>{person.description} </p>;
        })}
      </div>
      <div className="naughtiness list-details">
        <h2>Naughty Level</h2>
        {list.map((person) => {
          return <p key={uuidv4()}>{person.naughtiness} </p>;
        })}
      </div>
    </>
  ) : (<>No naughty people to show... yet</>);
}

export default NaughtyList;

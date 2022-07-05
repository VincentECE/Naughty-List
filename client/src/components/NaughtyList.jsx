import React, { useState } from "react";
import useStore from "../store.js";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../components/Item";
import ModifyPerson from "../buttons/ModifyPerson.jsx";

function NaughtyList() {
  const list = useStore((state) => state.naughtyList);

  const [editName, setEditName] = useState("");
  return list.length > 0 ? (
    <>
      <div style={{ width: "inherit", height: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "space-evenly",
            width: "inherit",
            height: "auto",
          }}
        >
          <h1>Name</h1>
          <h1>Description</h1>
          <h1>Level</h1>
          <span></span>
        </div>
        {list.map(({ name, description, naughtiness }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "space-evenly",
              width: "inherit",
              height: "auto",
            }}
            key={uuidv4()}
          >
            <Item
              text={name}
              title="Name"
              isEdit={name === editName}
            />
            <Item
              text={description}
              title="Description"
              isEdit={name === editName}
            />
            <Item
              text={naughtiness}
              title="Level"
              isEdit={name === editName}
            />
            <div>
             <ModifyPerson
             name={name}
             isEdit={name === editName}
             setEditName={setEditName}
             />
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <>No naughty people to show... yet</>
  );
}


export default NaughtyList;

import React, { useState, useEffect } from 'react';
import useStore from './store.js';
import { createRoot } from 'react-dom/client';
import { getNaughtyList } from './apiMaster.js';
import NaughtyList from './components/NaughtyList.jsx';
import AddPerson from './components/AddPerson.jsx'
const container = document.getElementById('app');
const root = createRoot(container);


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const updateNaughtyList = useStore((state) => state.updateNaughtyList);

  useEffect(() => {
    if(!isLoaded) {
      updateNaughtyList();
      setIsLoaded(true);
    }
  });

  return (
    <div className="main">
      <h1>Naughty List</h1>
      <div className="naughty-list">
        <NaughtyList/>
      </div>
    <div className="addPerson">
      <AddPerson />
    </div>
    </div>
  );
}

root.render(<App tab="home" />);

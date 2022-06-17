import create from 'zustand';
import { getNaughtyList, addToNaughtyList, deleteFromNaughtyList } from './apiMaster.js';

const useStore = create((set, get) => ({
  naughtyList: [],
  setNaughtyList: (naughtyList) => set({ naughtyList}),
  updateNaughtyList: async () => {
    try {
      const { data } = await getNaughtyList();
      set({naughtyList: data});
    } catch (err) {
      console.log(err);
    }
  },
  addToNaughtyListAndUpdate: async (e) => {
    e.preventDefault();

    const name = e?.target[0].value;
    const description = e?.target[1].value;
    const naughtyLevel = e?.target[2].value;
    try {
      const results = await addToNaughtyList(name, description, naughtyLevel);
      let currentNaughtyList = get().naughtyList;
      const newList = [{name, description, naughtyLevel}, ...currentNaughtyList]
      set(state => ({naughtyList: newList}));
    } catch (err) {
      console.log(err);
    }
  },
  deleteFromNaughtyListAndUpdate: async (name) => {
    try{
      await deleteFromNaughtyList(name);
      let currentNaughtyList = get().naughtyList;
      currentNaughtyList.pop();
      let newList = [...currentNaughtyList];
      set(state => ({naughtyList: newList}));
    } catch(err) {
      if(err.response.status === 400) {
        alert("can't delete because the name doesn't exist in the database. Possible cause is stale data");
      } else {
        alert('My bad. Something went wrong');
      }
    }

  },
}));


export default useStore;
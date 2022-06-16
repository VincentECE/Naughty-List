import create from 'zustand';
import { getNaughtyList, addToNaughtyList } from './apiMaster.js';

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
      console.log(get((state)=> (state.naughtyList)));
      // use get to get state;
      // create a new array all current with new object value;
      // set the new array to the state;
    } catch (err) {
      console.log(err);
    }
  },
}));


export default useStore;
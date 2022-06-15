import create from 'zustand';
import { getNaughtyList, addPerson } from './apiMaster.js';

const useStore = create((set) => ({
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
  addToNaughtyList: async (name, description, naughtyLevel) => {
    try {
      await addPerson(name, description, naughtyLevel);
      this.updateNaughtyList;
    } catch (err) {
      console.log(err);
    }
  },
}));


export default useStore;
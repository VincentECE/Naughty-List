import create from 'zustand';
import { getNaughtyList, addToNaughtyList } from './apiMaster.js';

const useStore = create((set) => ({
  naughtyList: [],
  setNaughtyList: (naughtyList) => set({ naughtyList}),
  updateNaughtyList: async () => {
    console.log('updating naughtyList')
    try {
      const { data } = await getNaughtyList();
      set({naughtyList: data});
    } catch (err) {
      console.log(err);
    }
  },
  addToNaughtyList: async (e) => {
    e.preventDefault();

    const name = e?.target[0].value;
    const description = e?.target[1].value;
    const naughtyLevel = e?.target[2].value;

    try {
      await addToNaughtyList(name, description, naughtyLevel);
      // this.updateNaughtyList;
    } catch (err) {
      console.log(err);
    }
  },
}));


export default useStore;
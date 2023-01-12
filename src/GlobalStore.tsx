import { create } from "zustand";
interface CountState {
  count: any;
  increment: any;
  decrement: any;
}

const useStore = create<CountState>()((set) => ({
  count: 0,
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  decrement: () => set((state: any) => ({ count: state.count - 1 })),
}));

export default useStore;

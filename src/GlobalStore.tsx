import { create } from "zustand";
type CountState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useStore = create<CountState>()((set) => ({
  count: 0,
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  decrement: () => set((state: any) => ({ count: state.count - 1 })),
}));

export default useStore;

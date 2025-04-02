import { create } from "zustand";

interface TabState {
  value: number;
  changeTab: (to: number) => void;
}

export const useTabChange = create<TabState>((set) => ({
  value: 0,
  changeTab: (newValue) => set(() => ({ value: newValue })),
}));

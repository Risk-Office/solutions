import { create } from "zustand";

interface ViewState {
  isViewingDetails: boolean;
  setIsViewingDetails: (value: boolean) => void;
}

export const useViewState = create<ViewState>((set) => ({
  isViewingDetails: false,
  setIsViewingDetails: (value) => set({ isViewingDetails: value }),
})); 
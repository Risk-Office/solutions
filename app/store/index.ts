import { create } from "zustand";

interface TabState {
  value: number;
  changeTab: (to: number) => void;
  teamHubSection: "chat" | "tasks" | "members" | null;
  setTeamHubSection: (section: "chat" | "tasks" | "members" | null) => void;
}

export const useTabChange = create<TabState>((set) => ({
  value: 0,
  teamHubSection: null,
  changeTab: (newValue) => set(() => ({ value: newValue })),
  setTeamHubSection: (section) => set({ teamHubSection: section }),
}));

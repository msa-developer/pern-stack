import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("selected-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("selected-theme", theme);
    set({ theme });
  },
}));

export default useThemeStore;

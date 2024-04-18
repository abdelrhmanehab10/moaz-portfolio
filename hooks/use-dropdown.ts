import { create } from "zustand";

interface DropdownStore {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export const useDropdown = create<DropdownStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

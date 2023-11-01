import { create } from "zustand";

interface SheetStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSheet = create<SheetStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

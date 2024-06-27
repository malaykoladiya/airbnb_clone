import { create } from "zustand";

interface AddPropertyModal {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const usePropertyModal = create<AddPropertyModal>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default usePropertyModal;

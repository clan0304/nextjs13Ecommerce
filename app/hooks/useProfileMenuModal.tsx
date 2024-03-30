import { create } from 'zustand';

interface useProfileMenuModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onClick: () => void;
}
const useProfileMenuModal = create<useProfileMenuModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onClick: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useProfileMenuModal;

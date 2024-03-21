import { create } from 'zustand';

interface CreateProductModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCreateProductModal = create<CreateProductModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreateProductModal;

'use client';

import useCreateProductModal from '../hooks/useCreateProductModal';

const Admin = () => {
  const createProductModal = useCreateProductModal();

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <button onClick={createProductModal.onOpen}>Add Product</button>
      </div>
    </div>
  );
};

export default Admin;

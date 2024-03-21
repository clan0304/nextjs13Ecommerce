'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return null;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="flex overflow-x-hidden 
    overflow-y-auto flex-col z-50 inset-0 absolute top-0 right-0 w-full h-full bg-neutral-400"
    >
      <div className="flex justify-end mr-2 mt-2">
        <IoMdClose size={20} onClick={handleClose} />
      </div>

      <div className="flex flex-col items-center gap-3">{body}</div>
      <div className="flex justify-center mt-5">
        <button
          className="w-1/4  bg-blue-400 hover:cursor-pointer rounded-lg"
          onClick={handleSubmit}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default Modal;

import { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, title, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Close modal"
          >
            ✖
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

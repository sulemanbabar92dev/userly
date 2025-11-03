'use client';

const Modal = ({ isOpen, onClose, title, children }) => {
  // if (!isOpen) return null;

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.70)] flex justify-center items-center z-50">
          {/* <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md  p-6 relative"> */}
          <div className="bg-white rounded-lg shadow-lg w-[80%] xl:w-1/3 p-6 max-h-[80vh] overflow-scroll relative">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-grey-200 hover:text-gray-700"
              aria-label="Close modal"
            >
              &#10005;
            </button>
            {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
            <div>{children}</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

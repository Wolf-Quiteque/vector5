import { useEffect, useState } from 'react';

const Toast = ({ type = 'success', message, isVisible, onClose }) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
    if (isVisible) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose(); // Trigger the onClose function after the timeout
      }, 2000); // Hide after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!show) return null;

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  const icon = type === 'success' ? (
    <svg
      className="w-5 h-5 text-green-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  ) : (
    <svg
      className="w-5 h-5 text-red-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4m0 4h.01m6.938-2.485A9 9 0 1112 3v0a9 9 0 010 18v0z"
      />
    </svg>
  );

  return (
    <div
      className={`fixed top-5 right-5 flex items-center w-full max-w-xs p-3 mb-4 text-gray-200 rounded-lg shadow-lg ${bgColor} transition-transform duration-500 ease-in-out transform ${
        show ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
      }`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-7 h-7 bg-white rounded-lg">
        {icon}
      </div>
      <div className="ml-2 text-xs font-semibold">{message}</div>
      <button
        onClick={() => {
          setShow(false);
          onClose();
        }}
        className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-white p-1 inline-flex items-center"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toast;

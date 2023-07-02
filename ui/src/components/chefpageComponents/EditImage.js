import React, { useRef, useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import ErrorModal from '../../errorModal/errorModal';
const EditImage = ({ className, circle, onPictureChange, onPictureRemove }) => {
    const fileInputRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handlePictureChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        onPictureChange(file);
      }
    };
  
    const handleRemoveClick = () => {
      onPictureRemove();
      setMenuOpen(false);
    };
  
    const handleMenuClick = () => {
      setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

  return (
    <div className={`${className}`}>
       <div>
        <button
          type="button"
          className={`flex items-center justify-center w-10 h-10 rounded-full ${
            circle ? 'rounded-full' : 'rounded'
          } bg-white shadow text-gray-500 cursor-pointer ${className}`}
          id="options-menu"
          onClick={handleMenuClick}
        >
          <AiOutlineCamera size="1.5em" />
        </button>
      </div>

      {menuOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handlePictureChange}
            />
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => fileInputRef.current.click()}
            >
              Change Picture
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleRemoveClick}
            >
              Remove Picture
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleMenuClick}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditImage;

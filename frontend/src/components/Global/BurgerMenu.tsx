//BurgerMenu.tsx. This is a reusable global header component
import { BurgerMenuProps } from '../../types';// adjust the path if needed


const BurgerMenu = ({ menuItems, isOpen, onClose }: BurgerMenuProps) => {
  return (
    <nav className={`fixed top-0 right-0 z-30 bg-background w-burger-menu h-burger-menu shadow-lg border rounded-menu-rounded transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
    <div className="flex justify-between items-center p-4">
      <button onClick={onClose} className="text-displayXS" aria-label="Close menu">
        &times;
      </button>
    </div>
    <ul className="flex flex-col p-4 space-y-4">
      {menuItems.map((item, index) => (
        <li key={index} className="flex items-center">
          <button
            type="button"
            onClick={() => {
              item.onClick();
              onClose();
            }}
            className="flex items-center space-x-2 h-2xl w-[120px] p-2"
          >
            {/* Add an icon if available */}
            <span className = "text-bodyXL">{item.label}</span>
          </button>
        </li>
      ))}
    </ul>
  </nav>
  );
};

export default BurgerMenu;

import { useDropdown } from "./Dropdown";

import '../../styles/Dropdown/DropdownItem.css'

export default function DropdownItem({ children, onClick }) {
  const { close } = useDropdown();

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li role="menuitem">
      <button onClick={handleClick} className="dropdown-item">
        {children}
      </button>
    </li>
  );
};

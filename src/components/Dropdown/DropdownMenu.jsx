import { useDropdown } from "./Dropdown";

import '../../styles/Dropdown/DropdownMenu.css'

export default function DropdownMenu({ children }) {
  const { isOpen } = useDropdown();

  if (!isOpen) return null;

  return (
    <ul role="menu" className="dropdown-menu">
      {children}
    </ul>
  );
};

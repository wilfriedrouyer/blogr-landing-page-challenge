import { useDropdown } from "./Dropdown";

import '../../styles/Dropdown/DropdownToggle.css'
import Chevron from "../Chevron";

export default function DropdownToggle({ children }) {
  const { toggle, isOpen } = useDropdown();

  return (
    <button
      onClick={toggle}
      aria-expanded={isOpen}
      aria-haspopup="menu"
      className={`dropdown-toggle ${isOpen ? "open" : ""}`}
    >
      <span className="label">{children}</span>
      <Chevron open={isOpen} />
    </button>
  );
};
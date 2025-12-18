import { createContext, useContext, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useDisclosure } from "../../hooks/useDisclosure";

const DropdownContext = createContext(null);

export function Dropdown({ children }) {
  const { isOpen, toggle, close } = useDisclosure();
  const ref = useRef(null);

  useClickOutside(ref, close);
  

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      <div ref={ref} className="dropdown">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  return useContext(DropdownContext);
}
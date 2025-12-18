import { createContext, useRef, useEffect, useContext } from "react";
import { useDisclosure } from "../../hooks/useDisclosure";

const DropdownContext = createContext(null);

export function Dropdown({ children }) {
  const { isOpen, toggle, close } = useDisclosure();
  const ref = useRef(null);

  // Fermer au clic extérieur
  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
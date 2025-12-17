import { createContext, useState, useRef, useEffect, useContext } from "react";

const DropdownContext = createContext(null);

export function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggle = () => setIsOpen(o => !o);
  const close = () => setIsOpen(false);

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
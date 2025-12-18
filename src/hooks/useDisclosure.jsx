import { useState } from "react";

export function useDisclosure() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(o => !o);
    const close = () => setIsOpen(false);

    return { isOpen, toggle, close }
}

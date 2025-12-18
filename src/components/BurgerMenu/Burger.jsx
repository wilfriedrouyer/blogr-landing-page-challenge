import { createContext, useContext, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useDisclosure } from "../../hooks/useDisclosure";

const BurgerContext = createContext(null);

export default function Burger({ children }) {
    const { isOpen, toggle, close } = useDisclosure();
    const ref = useRef(null);

    useClickOutside(ref, close);

    return (
        <BurgerContext.Provider value={{ isOpen, toggle, close }}>
            <div ref={ref} className="burger">
                {children}
            </div>
        </BurgerContext.Provider>
    )
}

export function useBurger()
{
    return useContext(BurgerContext);
}
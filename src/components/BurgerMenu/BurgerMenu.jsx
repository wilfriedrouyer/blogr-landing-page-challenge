import { useBurger } from "./Burger"

import '../../styles/Burger/BurgerMenu.css';

export default function BurgerMenu({ children }) {
    const { isOpen } = useBurger() 

    if(!isOpen) return null;

    return (
        <ul role="menu" className="burger-menu">
            {children}
        </ul>
    )
}

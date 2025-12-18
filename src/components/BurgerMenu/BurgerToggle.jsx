import { useBurger } from "./Burger";

import '../../styles/Burger/BurgerToggle.css';

import burgerIcon from '../../assets/img/icon-hamburger.svg';
import closeIcon from '../../assets/img/icon-close.svg';

export default function BurgerToggle() {
    const { isOpen, toggle } = useBurger();

    return (
      <button onClick={toggle} className="burger-menu-btn">
        {
          isOpen ? <img src={closeIcon} alt="Close menu" /> : <img src={burgerIcon} alt="Open menu" />
        }
        
      </button>
    )
}
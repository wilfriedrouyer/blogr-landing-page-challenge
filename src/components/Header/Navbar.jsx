import Logo from "../../assets/img/logo.svg";
import "../../styles/Header/Navbar.css"
import Button from "../Button";
import { Dropdown } from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import DropdownMenu from "../Dropdown/DropdownMenu";
import DropdownToggle from "../Dropdown/DropdownToggle";

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar-items">
            <div className="navbar-logo">
                <img src={Logo} alt="Blogr logo"/>
            </div>
            <div className="navbar-links">
                <Dropdown>
                    <DropdownToggle>Product</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Overview</DropdownItem>
                        <DropdownItem>Pricing</DropdownItem>
                        <DropdownItem>Marketplace</DropdownItem>
                        <DropdownItem>Features</DropdownItem>
                        <DropdownItem>Integrations</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownToggle>Company</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>About</DropdownItem>
                        <DropdownItem>Team</DropdownItem>
                        <DropdownItem>Blog  </DropdownItem>
                        <DropdownItem>Careers</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownToggle>Connect</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Contact</DropdownItem>
                        <DropdownItem>Newsletter</DropdownItem>
                        <DropdownItem>LinkedIn</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>

        <div className="navbar-authentication">
            <Button url="/" variant='transparent'>Login</Button>
            <Button url="/" variant='primary' >Sign Up</Button>
        </div>
    </nav>
  )
}

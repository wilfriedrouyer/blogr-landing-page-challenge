import Logo from "../../assets/img/logo.svg";
import "../../styles/Navbar.css"

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar-items">
            <div className="navbar-logo">
                <img src={Logo} alt="Blogr logo"/>
            </div>
            <div className="navbar-links">
                <div>Product</div>
                <div>Company</div>
                <div>Connect</div>
            </div>
        </div>

        <div className="navbar-authentication">
            <a href="/" className="login">Login</a>
            <a href="/" className="sign-up cta">Sign Up</a>
        </div>
    </nav>
  )
}


import "../styles/Navbar.scss"
import menu from "../assets/Images/menu.svg"
import logo from "../assets/Images/logo.png"

function Navbar() {
    return (
        <div className='navbar left_padding'>
            <img src={menu} alt="menu" className='menu'/>
            <img src={logo} alt="logo" className='logo'/>
            <div className='sign_in'>
                Sign In
            </div>
        </div>
    )
}

export default Navbar

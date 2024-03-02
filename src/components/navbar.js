import { NavLink } from "react-router-dom"
import './css/navbar.css'

const Navbar = () => {

    return (
        <div id="headerWhole">
            <header className="headerWhole">
                <div>
                    <p id='abideTitle'>ABIDE CHIROPRACTIC</p>
                </div>
                <div>
                <NavLink to='/' className='linksNav'>Home</NavLink>
                <NavLink to='/services' className='linksNav'>Services</NavLink>
                <NavLink to='appointment' className='linksNav'>Schedule Appointment</NavLink>
                </div>
                <div>
                <a href="mailto:abide.chiropractic22@gmail.com" className="icons">
                    <img src={require('./pics/mail-icon-envelope-sign-email-symbol-free-vector.jpg')} id='mail'/>
                </a>
                <a href="https://www.instagram.com/abide.chiropractic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="icons">
                    <img src={require('./pics/instagram.jpg')} id='ig'/>
                </a>
                </div>
                
            
            </header>
        </div>
    )
}

export default Navbar
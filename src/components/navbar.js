import { NavLink } from "react-router-dom"
import './css/navbar.css'

const Navbar = () => {

    return (
        <div id="headerWhole">
            <header>
                <div>
                    <p id='abideTitle'>Abide Chiropractic</p>
                </div>
                <div>
                <NavLink to='/' className='linksNav'>Home</NavLink>
                <NavLink to='/services' className='linksNav'>Services</NavLink>
                <NavLink to='appointment' className='linksNav'>Schedule Appointment</NavLink>
                </div>
                <div>
                {/* <a href="mailto:abide.chiropractic22@gmail.com">
                    <img src={require('./pics/mail-icon-envelope-sign-email-symbol-free-vector.jpg')}/>
                </a> */}
                
                </div>
            </header>
        </div>
    )
}

export default Navbar
import { NavLink } from "react-router-dom"
import './css/navbar.css'

const Navbar = () => {

    return (
        <div id="headerWhole">
            <header className="headerWhole">
                <div>
                    <p id='abideTitle'>ABIDE CHIROPRACTIC</p>
                </div>
                <div className="all">
                <div>
                <NavLink to='/' className='linksNav'>Home</NavLink>
                <NavLink to='/services' className='linksNav'>Services</NavLink>
                <NavLink to='appointment' className='linksNav'>Schedule Appointment</NavLink>
                </div>
                <div className='icons'>
                <a href="mailto:abide.chiropractic22@gmail.com" className='linksNav'>
                    <img src={require('./pics/newmail.png')} id='mail'/>
                </a>
                <a href="https://www.instagram.com/abide.chiropractic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='linksNav'>
                    <img src={require('./pics/igit.png')} id='ig'/>
                </a>
                </div>
                </div>
                
            
            </header>
        </div>
    )
}

export default Navbar
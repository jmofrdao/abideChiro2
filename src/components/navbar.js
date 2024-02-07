import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <div>
            <header>
                <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/services'>Services</NavLink>
                </div>
                <div>
                <a href="mailto:abide.chiropractic22@gmail.com">
                    <img src={require('./pics/mail-icon-envelope-sign-email-symbol-free-vector.jpg')}/>
                </a>
                
                </div>
            </header>
        </div>
    )
}

export default Navbar
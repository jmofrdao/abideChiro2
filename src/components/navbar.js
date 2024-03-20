import { NavLink } from "react-router-dom"
import './css/navbar.css'

const Navbar = () => {

    function myFunction(event) {
        event.preventDefault()
        var x = document.getElementById("myTopNav");
        console.log('x', x)
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

    return (
        <div className="topnav" id='myTopNav'>
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
                    <img src={require('./pics/newmail.png')} id='mail' className="badge"/>
                </a>
                <a href="https://www.instagram.com/abide.chiropractic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='linksNav'>
                    <img src={require('./pics/igit.png')} id='ig' className="badge"/>
                </a>
                <a className="icon" onClick={myFunction}>&#9776;</a>
               
                </div>
                </div>
                {/* <a className="icon" onClick={myFunction}>{'/u2630'}</a> */}
            
            </header>
        </div>
    )
}

export default Navbar
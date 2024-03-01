import './css/appointment.css'

const Appointment = () => {

    return (
        <div>
            <div className='box'>
            <img src={require('./pics/goodday.jpg')} id="goodPhoto"/>
            </div>
            <h1 className='title'> MAKE AN APPOINTMENT TODAY</h1>
            <a href="https://mine.hourmine.com/c/pCalendar.aspx?pa=AE3EE52A-9B89-9C9D-224E-E541EAB12280"
target="_blank" className='links'>Click to Schedule Now</a>
<hr></hr>
<div>
    <h2 className='title'>NEW PATIENTS CLICK LINK BELOW</h2>
    <a href="https://intakeq.com/new/o7qsyy" className='links'>New Patient Forms</a>
</div>
        </div>
    )
}

export default Appointment
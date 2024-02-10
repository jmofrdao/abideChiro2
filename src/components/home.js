import "./css/home.css";

const Home = () => {

    return (
        <div>
            <div>
            <img src={require('./pics/abide.jpeg')} id="abidePhoto"/>
            </div>
            <div>
                <h3>Meet Dr. Jade Morris</h3>
            </div>
            <div>
                <img src={require('./pics/jade.jpeg')}/>
            </div>
            <div>
                <h3>SPECIALTIES</h3>
                <ul>
                    <li> Pediatric Care</li>
                    <li> Back + Neck Pain</li>
                    <li> Auto Injury</li>
                    <li> Prenatal + Postnatal Care</li>
                    <li> Sciatica</li>
                    <li> Headaches + Migraines</li>
                    <li> Ear Infections</li>
                    <li> Wellness Care</li>
                    <li> Muscle tightness + Soreness</li>
                </ul>
            </div>
            <div>
                <h3>COME SEE US</h3>
                <p>4301 N. Sara Rd. Suite 119 OKC, OK 73099</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.6415537619587!2d-97.71168512423232!3d35.513140539189415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b206127f55b665%3A0x47826726ccba144a!2s4301%20N%20Sara%20Rd%20%23119%2C%20Yukon%2C%20OK%2073099!5e0!3m2!1sen!2sus!4v1707281476278!5m2!1sen!2sus" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Home
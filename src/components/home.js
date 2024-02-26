import "./css/home.css";

const Home = () => {

    return (
        <div id="homeDiv">
            <div className="box">
            <img src={require('./pics/abide.jpeg')} id="abidePhoto"/>
            </div>
            <hr></hr>
            <div>
                <h3 id='meetJade'>Meet Dr. Jade Morris</h3>
           </div>
            <div className="container">
                <img src={require('./pics/jade.jpeg')} className="container__image"/>
            
            <div className="container__text">
                <h3 className="jadeTitle">DR. JADE'S PERSONAL CHIROPRACTIC JOURNEY: </h3>
                <p className="jadePara">Dr. Jade has been a long time chiropractic patient, starting care for the first time in high school after a tubing accident. When Dr. Jade was in college she was diagnosed with Rheumatoid Arthritis, an autoimmune disease that attacks her joint and soft tissues. She found that chiropractic care was an amazing alternative to the medication that allowed her brain to talk to her body more easily. Dr. Jade wanted to create an environment of healing and peace in her office, striving to help and support others on their journey to being able to abide in their own bodies and their environment with ease. </p>
            
            <h3 className="jadeTitle">CERTIFICATIONS AND QUALIFICATIONS:</h3>
            <ul>
                <li className="jadePara">Oklahoma State Board Certified</li>
                <li className="jadePara"> Certified by the National Board of Chiropractors Examiners</li>
            </ul>
            </div>
            </div>
            <div>
                <h3 id='specialities'>SPECIALTIES</h3>
                <ul className="lists">
                    <li > Pediatric Care</li>
                    <li > Back + Neck Pain</li>
                    <li > Auto Injury</li>
                    <li > Prenatal + Postnatal Care</li>
                    <li > Sciatica</li>
                    <li > Headaches + Migraines</li>
                    <li > Ear Infections</li>
                    <li > Wellness Care</li>
                    <li > Muscle tightness + Soreness</li>
                </ul>
            </div>
            <hr></hr>
            <div>
                <h3 id='seeUs'>COME SEE US</h3>
                <p id='address'>4301 N. Sara Rd. Suite 119 OKC, OK 73099</p>
            </div>
            <div className="boxMap">
            <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.6415537619587!2d-97.71168512423232!3d35.513140539189415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b206127f55b665%3A0x47826726ccba144a!2s4301%20N%20Sara%20Rd%20%23119%2C%20Yukon%2C%20OK%2073099!5e0!3m2!1sen!2sus!4v1707281476278!5m2!1sen!2sus" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Home
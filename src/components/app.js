import {Routes, Route} from 'react-router-dom'
import {Navbar, Home, Services, Appointment} from './index'
import "./css/app.css";

const App = () => {

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path="/services" element={<Services />} />
                <Route path="/appointment" element={<Appointment/>}/>
                </Routes>
            </div>
            <div className='footer'>
                <footer id='footerPic'> 
                    <img src={require('./pics/footer2.PNG')}/>
                </footer>
            </div>
        </div>
    )
}

export default App
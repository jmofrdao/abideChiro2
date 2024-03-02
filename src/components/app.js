import {Routes, Route} from 'react-router-dom'
import {Navbar, Home, Services, Appointment, Footer} from './index'
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
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default App
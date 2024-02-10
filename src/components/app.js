import {Routes, Route} from 'react-router-dom'
import {Navbar, Home, Services, Appointment} from './index'

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
                <footer> 
                    <img src={require('./pics/footer2.PNG')}/>
                </footer>
            </div>
        </div>
    )
}

export default App
import {Routes, Route} from 'react-router-dom'
import {Navbar, Home, Services} from './index'

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
                </Routes>
            </div>
            <div>
                <footer> 
                    <img src={require('./pics/footer.jpeg')}/>
                </footer>
            </div>
        </div>
    )
}

export default App
import {Routes, Route} from 'react-router-dom'
import {Navbar, Home} from './index'

const App = () => {

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                {/* <Home/> */}
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
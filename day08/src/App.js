import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Contactus from './components/Contactus';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
            <table className='nav-table'>
              <tr>
                <td><Link to='/'>Home</Link></td>
                <td><Link to='/login'>Login</Link></td>
                <td><Link to='/contactus'>Contact Us</Link></td>
                <td><Link to='/about'>About Us</Link></td>
              </tr>
            </table>
          </nav>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

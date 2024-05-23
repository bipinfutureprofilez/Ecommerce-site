import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './Elements/Navbar.jsx';
import Home from './Pages/Home';
import { 
  Routes,
  Route
} from 'react-router-dom';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Navbar />
        <div className="App">
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>

        <Toaster />
    </>
  );
}

export default App;

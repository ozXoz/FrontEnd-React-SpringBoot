import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import DetailsUser from './users/DetailsUser';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/adduser' element={<AddUser />} />
      <Route path='/edituser/:id' element={<EditUser />} />
      <Route path="/detailsuser/:id" element={<DetailsUser />} />

      </Routes>


      </Router>

      
    </div> 
  );
}

export default App;

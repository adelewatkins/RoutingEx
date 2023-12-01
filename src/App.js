import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './Components/About'
import Home from './Components/Home'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (
    <Router>
      <nav>
        <Link className='link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover, link-opacity-25-hover' to='/'>Home</Link><br/>
        <Link className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/about'>About</Link><br/>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;

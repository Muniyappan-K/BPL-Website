import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import { About, Contact, Home } from "./pages";
import Factories from './pages/Factories';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/factories" element={<Factories/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
 
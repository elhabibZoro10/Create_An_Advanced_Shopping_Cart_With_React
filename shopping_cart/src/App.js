
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import {  Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import ShoppingCardProvider from './context/ShoppingCardContext';


function App() {
  return (
   <ShoppingCardProvider>
   <Navbar/>
   <Container className="mb-4">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/store' element={<Store/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
  </Container>
   </ShoppingCardProvider>
  );
}

export default App;

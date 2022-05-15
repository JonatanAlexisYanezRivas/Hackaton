import './App.css';
import Nav from './Components/NavMenu';
import Home from './Components/Home';
import Listado from './Components/ListadoEspecies';
import About from './Components/About';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './Components/NavMenu';

function App() {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavMenu></NavMenu>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='About' element={<About></About>}></Route>
          <Route path='Especies' element={<Listado></Listado>}></Route>
          <Route path='Footer' element={<Footer></Footer>}></Route>
        </Route>
      </Routes>   
    </BrowserRouter> */}
      <Nav></Nav>
      <Home></Home>
     <Listado></Listado>
     <About></About>
     <Footer></Footer>
    </>
  );
}

export default App;

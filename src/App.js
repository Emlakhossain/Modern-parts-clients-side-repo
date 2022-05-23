import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Shared/Navbar';
import Home from './Pages/Home/Home';
import Tools from './Pages/Tools/Tools';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Home/Shared/Footer';
import Portfolio from './Pages/Portfilio/Portfolio';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

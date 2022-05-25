import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Shared/Navbar';
import Home from './Pages/Home/Home';
import Tools from './Pages/Tools/Tools';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Home/Shared/Footer';
import Portfolio from './Pages/Portfilio/Portfolio';
import Login from './Pages/Home/Shared/Login';
import SignUp from './Pages/Home/Shared/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Purchase' element={<RequireAuth>
          <Tools></Tools>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

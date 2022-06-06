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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyPurchase from './Pages/Dashboard/MyPurchase';
import MyReview from './Pages/Dashboard/MyReview';
import PageNotFound from './Pages/Home/Shared/PageNotFound';
import Users from './Pages/Dashboard/Users';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Purchase' element={<RequireAuth>
          <Tools></Tools>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyPurchase></MyPurchase>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;

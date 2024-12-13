import { Route, Router, Routes } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard';
import DealerTable from './Admin/DealerTable';
import ProductView from './Admin/ProductView';
import UserTable from './Admin/UserTable';
import './App.css';
import Dealerslogin from './Components/Dealerslogin';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Loginform from './Components/Loginform';
import Userslogin from './Components/Userslogin';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import TrackOrder from './Admin/TrackOrder';
import TotalEarnings from './Admin/TotalEarnings';
import AdminNav from './Admin/AdminNav';
import Feedback from './Admin/Feedback';
import ProductAdd from './DealerAdmin/ProductAdd'
import DealerNav from './DealerAdmin/DealerNav';
import EditProduct from './DealerAdmin/EditProduct';
import DealerAbout from './DealerAdmin/DealerAbout';
import Carts from './user/Carts';
import DeatileProduct from './pages/DeatileProduct';
import Orders from './user/Orders';
import UserProfile from './user/UserProfile';
import Buynow from './pages/Buynow';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Loginform/>}/>
        <Route path='userlogin' element={ <Userslogin/>}/>
        <Route path='dealerlogin' element={<Dealerslogin/>}/>
        <Route path='admin' element={<AdminDashboard/>}/>
        <Route path='/admin/usertable' element={<UserTable/>}/>
        <Route path='/admin/dealertable' element={<DealerTable/>}/>
        <Route path='/admin/productview' element={<ProductView/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='cars' element={<Cars category={'cars'}/>}/>
        <Route path='bikes' element={<Cars category={'motorcycles'}/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/admin/trackorder' element={<TrackOrder/>}/>
        <Route path='/admin/feedback' element={<Feedback/>}/>
        <Route path='/admin/totalearnings' element={<TotalEarnings/>}/>
        <Route path='/dealeradmin/productadd' element={<ProductAdd/>}/>
        <Route path='/dealeradmin/editproduct' element={<EditProduct/>}/>
        <Route path='/dealeradmin/dealerabout' element={<DealerAbout/>}/>
        <Route path='cart' element={<Carts/>}/>
        <Route path='deatileproduct/:id' element={<DeatileProduct/>}/>
        <Route path='userprofile' element={<UserProfile/>}/>
        <Route path='order' element={<Orders/>}/>
        <Route path='buynow' element={<Buynow/>}/>
        
        <Route />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Card from './Components/Cards/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar/NavBar';
import { Route , Routes,useLocation } from 'react-router-dom';
import ProductCard from './Components/ProductCard';
import Home from './Pages/Home';
import Login from './Pages/LoginForm/Login'
import Guard from './Components/Guard';
import Product from './Pages/Product';
import ProductDetails from './Components/ProductDetails';
import Favourites from './Components/AddToCart/Favourites';
function App() {
  return (
    <>
    {/* <Card/> */}
    <NavBar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/productDetails' element={<ProductDetails/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>

    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer_login from "./components/Footer_login";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { useContext } from "react";
import { appContex } from "./context/appContext";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Password_page from "./pages/Password_page";
import Products from "./pages/Products";
import Product_details from "./pages/Product_details";
import WriteReview from "./pages/WriteReview";
import CartPage from "./pages/CartPage";
import Categories from "./pages/Categories";
import { cartContext } from "./context/CartContex";
import { APIcontext } from "./context/APIContext";



function App() {
const{page, clickedCart} = useContext(appContex)
const {cartItemsLength} = useContext(cartContext)
const{currentUserInfo} = useContext(APIcontext)


  return (
    <div className={` ${clickedCart && currentUserInfo && cartItemsLength  > 0 ? 'md:w-[90%] min-h-screen flex flex-col justify-between items-center' : 'w-[100%]'}`} id="main">
    <Router>
      {page === '/login' || page === '/register' || page === '/login/pass' ? null: <Nav/> }      
      {/* {page === '/'? <Nav/>: null }       */}
          <Routes>
            <Route path="/" element={ <Home/>}/>            
            <Route path="/products" element={ <Products/>}/>            
            <Route path="/categories/:id" element={ <Categories/>}/>            
            <Route path="/products/:id" element={ <Product_details/>}/>            
            <Route path="/writereview" element={ <WriteReview/>}/>            
            <Route path="/cart" element={ <CartPage/>}/>            
            <Route path="/login" element={ <Login/>}/>            
            <Route path="/login/pass" element={ <Password_page/>}/>            
            <Route path="/register" element={<Register/>}/>            
          </Routes>       
       {page === '/login' || page === '/register' || page === '/login/pass' ?  <Footer_login/> : <Footer/>}
    </Router>
    </div>
  );
}

export default App;

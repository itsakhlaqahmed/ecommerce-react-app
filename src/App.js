import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import Login from "./components/common/auth/Login";
import Signup from "./components/common/auth/Signup";
import SearchPage from "./Pages/SearchPage";
import './styles.css'
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" exact Component={Login}></Route>
      <Route path="/signup" exact Component={Signup}></Route>
      <Route path='/' exact Component={Home} />
      <Route path='/products' exact Component={ProductsPage} />
      <Route path="/categories/category" exact Component={''} />
      <Route path="/products/product/:id" exact Component={ProductDetailsPage} />
      <Route path="/category/:id" exact Component={ProductDetailsPage} />
      <Route path="/search/:searchItem" exact Component={SearchPage} />
      <Route path="/checkout" exact Component={Checkout} />
      
    </Routes>
  </BrowserRouter>

  );
}

export default App;

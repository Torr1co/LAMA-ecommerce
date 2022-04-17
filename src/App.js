import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route
          path="register"
          element={currentUser ? <Navigate replace to="/" /> : <Register />}
        />
        <Route
          path="login"
          element={currentUser ? <Navigate replace to="/" /> : <Login />}
        />
        <Route path="cart" element={<Cart />} />
        <Route path="pay" element={<Pay />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

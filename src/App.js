import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Latest from "./components/Latest";

function App() {
  return (
    <main className={"bg-primary text-tertiary"}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="skin" element={<Category category={'skin'} />} />
          <Route path="hair" element={<Category category={'hair'} />} />
          <Route path="makeup" element={<Category category={'makeup'} />} />
          <Route path="bags" element={<Category category={'bags'} />} />
          <Route path="earring" element={<Category category={'earring'} />} />
          <Route path="shoes" element={<Category category={'shoes'} />} />
          <Route path={"/customerCare"} element={<Category />} />
          <Route path={"/product"} element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path={"/cart-page"} element={<Cart />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
/*import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Latest from "./components/Latest";
import Shop from "./components/Shop";

function App() {
  return (
      <main className={"bg-primary text-tertiary"}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
           {/!* <Route path={"/shop"} element={<Shop/>} />
            <Route path={"/shop"} element={<Shop />}>
              <Route path="skin" element={<Category category={'skin'} />} />
              <Route path="hair" element={<Category category={'hair'} />} />
              <Route path="makeup" element={<Category category={'makeup'} />} />
              <Route path="bags" element={<Category category={'bags'} />} />
              <Route path="earring" element={<Category category={'earring'} />} />
              <Route path="heels" element={<Category category={'heels'} />} />
              <Route path="shoes" element={<Category category={'shoes'} />} />
            </Route>*!/}
            <Route path="skin" element={<Category category={'skin'} />} />
            <Route path="hair" element={<Category category={'hair'} />} />
            <Route path="makeup" element={<Category category={'makeup'} />} />
            <Route path="bags" element={<Category category={'bags'} />} />
            <Route path="earring" element={<Category category={'earring'} />} />
            <Route path="heels" element={<Category category={'heels'} />} />
            <Route path="shoes" element={<Category category={'shoes'} />} />
            <Route path={"/offers"} element={<Offer />} />
            <Route path={"/latest"} element={<Latest />} />
            <Route path={"/customerCare"} element={<Category />} />
            <Route path={"/product"} element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path={"/cart-page"} element={<Cart />} />
            <Route path={"/login"} element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
  );
}

export default App;*/

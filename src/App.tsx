import { Routes, Route } from "react-router-dom";
import CartButton from "./components/CartButton";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Barcode from "./pages/Barcode";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Specials from "./pages/Specials";


export default function App() {

  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Specials" element={<Specials/>}/>
        <Route path="/Barcode" element={<Barcode/>}/>
      </Routes>
      <CartButton/>
    </ShoppingCartProvider>
  );
}

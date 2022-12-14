import React from "react"
import  "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import store from "./store/store";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";



export default function App(){
  return(
    <>
    <Provider store={store}>
    <BrowserRouter>
<Navbar />
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      
      
      </BrowserRouter>
    </Provider>
    </>
  )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from "../Heading/Heading";
import HomePage from "../HomePage/HomePage";
import MenuPage from "../MenuPage/MenuPage";
import ProductDetailsPage from "../ProductDetailsPage/ProductDetailsPage";
import ContactPage from "../ContactPage/ContactPage";
import ShippingCart from "./ShippingCart/ShippingCart";
import CheckOut from "./ShippingCart/CheckOut/CheckOut";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import ForgetPassword from "../Auth/ForgetPassword/ForgetPassword";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";

function Pages() {
    return (
        <>
        <BrowserRouter>
                <Heading />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="menu" element={<MenuPage/>} />
                    <Route path="menu/:id" element={<ProductDetailsPage />} />
                    <Route path="contactus" element={<ContactPage/>} />

                    {/* Cart */}

                    <Route path="shippingcart" element={<ShippingCart/>}/>
                    <Route path="shippingcart/checkout" element={<CheckOut/>}/>


                    {/* Auth */}

                    <Route path="login" element={<Login/>}   />
                    <Route path="register" element={<Register/>}   />
                    <Route path="forget" element={<ForgetPassword/>}   />
                    <Route path="reset" element={<ResetPassword/>}   />
                    
                </Routes>
        </BrowserRouter>
        </>
    );
}

export default Pages;

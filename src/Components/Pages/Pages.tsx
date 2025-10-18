import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Heading from "../Heading/Heading";
import HomePage from "../HomePage/HomePage";
import MenuPage from "../MenuPage/MenuPage";
import ProductDetailsPage from "../ProductDetailsPage/ProductDetailsPage";
import ContactPage from "../ContactPage/ContactPage";
import ShippingCart from "./ShippingCart/ShippingCart";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import ForgetPassword from "../Auth/ForgetPassword/ForgetPassword";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";
import CheckOut from "./ShippingCart/CheckOut/CheckOut";
import React from "react";
import UserProfile from "./UserAccount/UserProfile/UserProfile";
import UserAccount from "./UserAccount/UserAccount";
import Orders from "./UserAccount/Orders/Orders";

const AppRoutes: React.FC = () => {

    const location = useLocation();
    const withoutHeadingPages: string[] = ["/login", "/register", "/forget", "/reset"];

    return (
        <>
        
        {!withoutHeadingPages.includes(location.pathname) && <Heading />}

        <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />


            <Route path="menu/:id" element={<ProductDetailsPage />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/useraccount" element={<UserAccount />}>
                <Route index element={<UserProfile />} /> 
                <Route path="orders" element={<Orders />} />
                <Route path="logout" element={<Register />} />
            </Route>

            {/* Cart */}
            <Route path="/shippingcart" element={<ShippingCart />} />
            <Route path="/shippingcart/checkout" element={<CheckOut />} />

            {/* Auth */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forget" element={<ForgetPassword />} />
            <Route path="reset" element={<ResetPassword />} />
        </Routes>
        </>
    );
};

const Pages: React.FC = () => {
    return (
        <BrowserRouter>
        <AppRoutes />
        </BrowserRouter>
    );
};

export default Pages;

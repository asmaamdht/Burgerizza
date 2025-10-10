import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from "../Heading/Heading";
import HomePage from "../HomePage/HomePage";
import MenuPage from "../MenuPage/MenuPage";
import ContactPage from "../ContactPage/ContactPage";
import ShippingCart from "./ShippingCart/ShippingCart";

function Pages() {
    return (
        <>
        <BrowserRouter>
                <Heading />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="menu" element={<MenuPage/>} />
                    <Route path="contactus" element={<ContactPage/>} />

                    {/* Cart */}

                    <Route path="shippingcart" element={<ShippingCart/>}/>
                </Routes>
        </BrowserRouter>
        </>
    );
}

export default Pages;

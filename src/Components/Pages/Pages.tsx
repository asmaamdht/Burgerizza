import { BrowserRouter, Routes, Route,  useLocation } from "react-router-dom";
import Heading from "../Heading/Heading";
import HomePage from "../HomePage/HomePage";
import MenuPage from "../MenuPage/MenuPage";
import ContactPage from "../ContactPage/ContactPage";
import ShippingCart from "./ShippingCart/ShippingCart";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import ForgetPassword from "../Auth/ForgetPassword/ForgetPassword";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";
import CheckOut from "./ShippingCart/CheckOut/CheckOut";






function AppRoutes() {
    const location = useLocation();
    const withoutHeadingPages = ["/login", "/register", "/forget", "/reset"];

    return (
        <>
            {!withoutHeadingPages.includes(location.pathname) && <Heading />}
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="home" element={<HomePage />} />
                <Route path="menu" element={<MenuPage/>} />
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
        </>
    );
}

export default function Pages() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

// function Pages() {
//     return (
//         <>
//         <BrowserRouter>
//                 <Heading />

//         </BrowserRouter>
//         </>
//     );
// }

// export default Pages;

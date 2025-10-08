import './Heading.css'
// import { IoLogInOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { NavLink,Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";


import { useState } from "react";

function Heading() {

    const [responsive, setResponsive] = useState(false);

    return (
        <>
        <nav id="heading">
            <div className="heading container">

                <div className="heading_logo">
                    <div className="logo_text">
                        <NavLink to="/"><h1>Burgerizza</h1></NavLink>
                    </div>
                </div>

                <div className="heading_menu" >
                    <NavLink to="/home" className="menu">Home</NavLink>
                    <NavLink to="/menu"  className="menu">Menu</NavLink>
                    <NavLink to="/contactus" className="menu">ContactUs</NavLink>
                </div>



                <div className="heading_icons">

                    <Link to="" className='user_icon'>
                        <i><FaRegUser /></i>
                    </Link>

                    <Link to="shippingcart" className='cart'>
                        <i><BsCart3 /></i>
                    </Link>

                    <i className='toggle' onClick={() => setResponsive(true)}><RiMenu2Line /></i>

                </div>

            </div>


            {/* Mobile Menu */}
            {responsive && (
                <div className="mobile_menu">
                    <div className="mobile_close" onClick={() => setResponsive(false)}>
                        <RiCloseLine />
                    </div>
                    <NavLink to="/home" className="mobile_menu_link" onClick={() => setResponsive(false)}>Home</NavLink>
                    <NavLink to="/menu" className="mobile_menu_link" onClick={() => setResponsive(false)}>Menu</NavLink>
                    <NavLink to="/contactus" className="mobile_menu_link" onClick={() => setResponsive(false)}>ContactUs</NavLink>

                    <Link to="/account" className="mobile_account" onClick={() => setResponsive(false)}>
                        <i><FaRegUser /></i>
                        <h4>Account</h4>
                    </Link>
                </div>
            )}


        </nav>
        </>
    )
}

export default Heading;
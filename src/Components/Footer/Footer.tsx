import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";


const Footer:React.FC = () => {
    return (
        <div id='footer'>
            <div className="container_box footer">

                <div className="footer_col">
                    <h2>Burgerizza</h2>

                </div>


                <div className="footer_col_links">
                    <Link to="/home">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer_media">
                    <i><FaFacebookF /></i>
                    <i><RiInstagramFill /></i>
                    <i><FaTwitter /></i>
                </div>

            </div>
        </div>
    )
}

export default Footer
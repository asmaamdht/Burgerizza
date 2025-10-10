import React from "react";
import "./ShippingCart.css";
import { RxCross2 } from "react-icons/rx";

const TableMobile: React.FC = () => {
    return (
        <>
        <tr className="tbody_icon">
            <td>         
            <i><RxCross2 /></i>
            </td>
        </tr>
        <tr>
            <th rowSpan={2} className="table_product_img_response">
            <img src="/src/assets/Images/menu_img/burger_img1.png" alt="" />
            </th>
            <td colSpan={2} className="product_info">
            <h4>Title</h4>
            <p>Lorem ipsum dolor </p>
            </td>
        </tr>
        <tr>
            <th>Price</th>
            <td className="td_price">EGP 120</td>
        </tr>
        </>
    );
};

export default TableMobile;

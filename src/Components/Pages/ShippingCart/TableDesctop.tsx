import React from "react";
import "./ShippingCart.css";
import { RxCross2 } from "react-icons/rx";


const TableDesctop: React.FC = () => {
    return (
        <>
        <tbody className="table_tbody_left">
            <tr>
            <td>
                <i>
                <RxCross2 />
                </i>
            </td>

            <td className="table_product_img">
                <img src="/src/assets/Images/menu_img/burger_img1.png" alt="" />
            </td>
            <td className="product_info">
                <h4>Title</h4>
                <p>Lorem ipsum dolor </p>
            </td>

            <td className="td_price">EGP 120.00</td>

            <td>
                <div className="table_quantity">
                <div className="table_quantity_td">
                    <button>-</button>
                    <button>2</button>
                    <button>+</button>
                </div>
                </div>
            </td>

            <td className="td_subtotal">EGP 120</td>
            </tr>
        </tbody>
        </>
    );
};

export default TableDesctop;

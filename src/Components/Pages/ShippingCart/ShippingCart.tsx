import React from 'react';
import './ShippingCart.css';
import { Link } from 'react-router-dom';
import TableDesctop from './TableDesctop';
import TableMobile from './TableMobile';






const ShippingCart:React.FC = () => {
    return (
    <div id="background_home">
            <section id="cart">
                <div className="cart_container container">
                    <div className="cart_title">
                        <h1>Shipping Cart</h1>
                    </div>
                </div>


                <div id="cart_shipping">

                    <div className="cart_shipping_container container">

                        <table className="cart_table_left">
                            
                            <thead  className='table_head'>
                                <tr>
                                    <th></th>
                                    <th colSpan={2}>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>


                            {/* Table Desktop */}
                            <TableDesctop/>   
                        </table>

                        <table className="responsive_table">
                            <tbody className='tbody_response'>
                                <TableMobile/>
                                <tr>
                                    <th></th>
                                    <th>Quantity</th>
                                    <td className='table_quantity'>
                                        <div className='table_quantity_td'>
                                            <button>-</button>
                                            <button>3</button>
                                            <button>+</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th></th>
                                    <th>Subtotal</th>
                                    <td className="td_subtotal">
                                        EGP 300
                                    </td>
                                </tr>
                            </tbody>    
                        </table>





                        <table className="cart_table_right">
                            <thead className='table_head_right'>
                                <tr>
                                    <th>Order Summary</th>
                                </tr>
                            </thead>
                            <tbody className='table_tbody_right'>
                                <tr><td>Items : <span>2</span></td></tr>
                                <tr><td> SubTotal : <span>EGP 120</span></td></tr>
                                <tr><td>Shipping : <span>200</span> </td></tr>
                            </tbody>
                
                            <tbody  className='total'>
                                <tr><td> Total : <span>EGP 100</span></td></tr>
                            </tbody>
                
                            <tfoot>
                                <tr>
                                    <td>
                                        <Link to="checkout">
                                        <button className='btn_cart'>Proceed to Checkout</button>
                                        </Link>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>





                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShippingCart;

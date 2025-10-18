
import '../../Menu/Menu.css';
import './OurMenu.css';
import { Link } from 'react-router-dom';
import type { Menu as MenuType } from "../../../../types";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { add, increase, decrease } from "../../../../Store/CartSlice";
import type { RootState, AppDispatch } from "../../../../Store/Store";

import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


import { FaArrowRightLong } from "react-icons/fa6";


const OurMenu = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.cart);
    const user = useSelector((state: RootState) => state.user);

    // Get MenuData Using ReactQuary

    const { data} = useQuery<MenuType[]>({
        queryKey: ["menuData"],
        queryFn: async () => {
        const getAllMenuData = await fetch("https://68e3e5f38e116898997a5f72.mockapi.io/items");
        return getAllMenuData .json();
        },
    });

    const AllMenuData = data?.slice(0, 8) || [];

    const handleAddClick = (item: MenuType) => {
        if (!user) {
        alert("You need to login first!");
        navigate("/login");
        return;
        }
        dispatch(add(item));
    };


    const handleIncrement = (id: number) => {
        dispatch(increase(id));
    };

    const handleDecrement = (id: number) => {
        dispatch(decrease(id));
    };


    return (
        <>
        
        <div id="ourmenu" className='pb-5 '>
            <div className="ourmenu container_box">

                <div className="ourmenu_header">
                    <Link to="/menu">
                        <button className='ourmenu_btn'>View All Menu
                            <i className='p-2'><FaArrowRightLong /></i>
                        </button>
                    </Link>
                    
                </div>
                

                <div className=" menu_items ourmenu_item">

                    {
                        AllMenuData.map((item:MenuType)=> (
                            <div className="menu_item" key={item.id}>
                                <div 
                                    className="menu_item_img"
                                    // onClick={() => handleProductClick(item.id)} 
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={item.image} alt="" />
                                </div>

                                <div className="menu_item_data">
                                    <div 
                                        className="menu_item_col1"
                                        // onClick={() => handleProductClick(item.id)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <h3>{item.name.length > 12 ? item.name.slice(0, 12) + "..." : item.name}</h3>
                                        <div className="item_star">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaRegStar />
                                        </div>
                                    </div>
                                    <div className="menu_item_col2">
                                        <p>{item.description?.substring(0, 25)}...</p>
                                    </div>


                                    <div className="menu_item_col3">
                                        {
                                            (() => {
                                                const cartItem = cart.find((cartItem) => cartItem.id === item.id);

                                                return cartItem ? (
                                                    <div className="counter_item_btn">
                                                        <button onClick={() => handleDecrement(item.id)} >−</button>
                                                        <span>{cartItem.quantity}</span>
                                                        <button onClick={() => handleIncrement(item.id)}>+</button>
                                                    </div>
                                                ):(
                                                    <button className='menu_item_btn' onClick={() => handleAddClick(item)}  >
                                                        <BsCart3 />
                                                    </button>
                                                );
                                            })()
                                        }

                                        <p>{item.price}<span>EGP</span></p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
        
        
        </>
    )
}

export default OurMenu
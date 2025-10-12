import './Menu.css';
import type { Menu as MenuType } from '../../../types';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../../Store/Store';
import { getAllMenuData } from '../../../Store/MenuSlice';
import {add, increase, decrease} from '../../../Store/CartSlice';
import { useNavigate } from 'react-router-dom'

function Menu() {
    // Menu Active Filter

    const user = useSelector((state: RootState) => state.user);
    const dispatch =useDispatch<AppDispatch>();
    const { menuData, loading, error } = useSelector((state: RootState) => state.menu);
    const navigate = useNavigate();
    const cart = useSelector((state:RootState) => state.cart);

    const [activeFilter, setActiveFilter] = useState<string>("Menu");

    useEffect(()=> {
        dispatch(getAllMenuData());
    }, [dispatch])



    // Add Items
    const handleAddClick = (item: MenuType) => {
        if (!user) {
            alert("You need to login first!");
            navigate("/login");
            return;
        }
        dispatch(add(item));
    };
    const handleIncrement = (id:number) => {
        dispatch(increase(id));
    };

    const handleDecrement = (id:number) => {
        dispatch(decrease(id));
    };


    const filteredMenuData = activeFilter === "Menu"
    ? menuData : menuData.filter((item) => item.category === activeFilter);



    return (
        <>
        <div id="menus">
            <div className="menus_container container_box">
                <div className="menu_title">
                    <h1>Our Menu</h1>
                </div>

                <div className="Menu_btns">
                    {["Menu", "Burger", "Pizza", "Drinks", "Dessert"].map((category) => (
                        <button key={category}
                            className={activeFilter === category ? "active" : ""}
                            onClick={() => setActiveFilter(category)}
                        >
                            <span className="emoji">
                            {category === "Menu" && "📜"}
                            {category === "Burger" && "🍔"}
                            {category === "Pizza" && "🍕"}
                            {category === "Drinks" && "🍹"}
                            {category === "Dessert" && "🍰"}
                            </span>
                            <p>{category}</p>
                        </button>
                    ))}
                </div>




                <div className="menu_items">

                    {
                        loading? (
                            <p>Loading</p>
                        ): error? (
                            <p>{error}</p>
                        ):(
                            filteredMenuData.map((item:MenuType)=> (
                                <div className="menu_item" key={item.id}>
                                    <div className="menu_item_img">
                                        <img src={item.image} alt="" />
                                    </div>

                                    <div className="menu_item_data">
                                        <div className="menu_item_col1">
                                            <h3>{item.name.length > 12 ? item.name.slice(0, 12) + "..." : item.name}</h3>
                                            <div className="item_star">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaRegStar />
                                            </div>
                                        </div>
                                        <div className="menu_item_col2">
                                            <p>{item.description.substring(0, 25)}...</p>
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
                        )
                    }



                </div>
            </div>
        </div>
        </>
    )
}

export default Menu
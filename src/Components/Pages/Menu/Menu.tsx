import './Menu.css';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useState } from 'react';

function Menu() {
    const activeFilter = "Menu"; // Menu Active Filter

    // Start Types:
    const [count, setCount] = useState<number>(0);
    const [showCounter, setShowCounter] = useState<boolean>(false);

    const handleAddClick =(): void => {
        setShowCounter(true);
        setCount(1);
    }
    // Handle Increment&Decrement Buttom
    const handleIncrement = (): void => setCount((count) => count + 1);
    const handleDecrement = (): void => {
        if (count > 1) setCount((count) => count - 1);
        else {
        setShowCounter(false);
        setCount(0);
        }
    };



    return (
        <>
        <div id="menus">
            <div className="menus_container container">
                <div className="menu_title">
                    <h1>Our Menu</h1>
                </div>

                <div className="Menu_btns">
                    {/* <button><span>📜</span><p>Menu</p></button>
                    <button><span>🍔</span><p>Burger</p></button>
                    <button> <span>🍕</span><p>Pizza</p></button>
                    <button><span>🍹</span><p>Juice</p></button>
                    <button><span>🍰</span><p>Dessert</p></button> */}

                    {["Menu", "Burger", "Pizza", "Juice", "Dessert"].map((category) => (
                        <button key={category}
                            className={activeFilter === category ? "active" : ""}
                        >
                            <span className="emoji">
                            {category === "Menu" && "📜"}
                            {category === "Burger" && "🍔"}
                            {category === "Pizza" && "🍕"}
                            {category === "Juice" && "🍹"}
                            {category === "Dessert" && "🍰"}
                            </span>
                            <p>{category}</p>
                        </button>
                    ))}
                </div>




                <div className="menu_items">
                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src="/src/assets/Images/menu_img/pizza_img1.png" alt="" />
                        </div>

                        <div className="menu_item_data">
                            <div className="menu_item_col1">
                                <h3> Cheese burger </h3>
                                <div className="item_star">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <div className="menu_item_col2">
                                <p>Cheese burger</p>
                            </div>


                            <div className="menu_item_col3">
                                {!showCounter ? (
                                <button className='menu_item_btn' onClick={handleAddClick}>
                                    <BsCart3 />
                                </button>
                                ):(
                                <div className="counter_item_btn">
                                    <button onClick={handleDecrement}>−</button>
                                    <span>{count}</span>
                                    <button onClick={handleIncrement}>+</button>
                                </div>
                                )
                            
                            }

                                <p>120<span>EGP</span></p>
                            </div>
                        </div>

                    </div>



                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src="/src/assets/Images/menu_img/dessert_img1.png" alt="" />
                        </div>

                        <div className="menu_item_data">
                            <div className="menu_item_col1">
                                <h3> Cheese burger </h3>
                                <div className="item_star">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <div className="menu_item_col2">
                                <p>Cheese burger</p>
                            </div>


                            <div className="menu_item_col3">
                                {!showCounter ? (
                                <button className='menu_item_btn' onClick={handleAddClick}>
                                    <BsCart3 />
                                </button>
                                ):(
                                <div className="counter_item_btn">
                                    <button onClick={handleDecrement}>−</button>
                                    <span>{count}</span>
                                    <button onClick={handleIncrement}>+</button>
                                </div>
                                )
                            
                            }

                                <p>120<span>EGP</span></p>
                            </div>
                        </div>

                    </div>


                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src="/src/assets/Images/menu_img/burger_img1.png" alt="" />
                        </div>

                        <div className="menu_item_data">
                            <div className="menu_item_col1">
                                <h3> Cheese burger </h3>
                                <div className="item_star">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <div className="menu_item_col2">
                                <p>Cheese burger</p>
                            </div>


                            <div className="menu_item_col3">
                                {!showCounter ? (
                                <button className='menu_item_btn' onClick={handleAddClick}>
                                    <BsCart3 />
                                </button>
                                ):(
                                <div className="counter_item_btn">
                                    <button onClick={handleDecrement}>−</button>
                                    <span>{count}</span>
                                    <button onClick={handleIncrement}>+</button>
                                </div>
                                )
                            
                            }

                                <p>120<span>EGP</span></p>
                            </div>
                        </div>

                    </div>


                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src="/src/assets/Images/menu_img/juice_img1.png" alt="" />
                        </div>

                        <div className="menu_item_data">
                            <div className="menu_item_col1">
                                <h3> Cheese burger </h3>
                                <div className="item_star">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <div className="menu_item_col2">
                                <p>Cheese burger</p>
                            </div>


                            <div className="menu_item_col3">
                                {!showCounter ? (
                                <button className='menu_item_btn' onClick={handleAddClick}>
                                    <BsCart3 />
                                </button>
                                ):(
                                <div className="counter_item_btn">
                                    <button onClick={handleDecrement}>−</button>
                                    <span>{count}</span>
                                    <button onClick={handleIncrement}>+</button>
                                </div>
                                )
                            
                            }

                                <p>120<span>EGP</span></p>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>
        </>
    )
}

export default Menu
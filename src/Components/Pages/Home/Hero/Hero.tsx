import "./Hero.css";
import { GiRoundStar } from "react-icons/gi";


function Hero() {
    return (
        <>
            <div id="hero">
                <div className="hero container">
                    <div className="hero_right">
                        <div className="hero_text">
                            <p>Welcome</p>
                            <h1>Enjoy Your <span>Deliciouse</span> food </h1>
                            <p>
                                Savor our freshly made burgers and cheesy pizzas, crafted with the finest ingredients.<br></br>
                            </p>
                            <button className="hero_btn">Order Now</button>
                        </div>
                        <div className="hero_cards">
                            <div className="hero_card">
                                <div className="hero_card_img">
                                    <img src="/src/assets/Images/menu_img/dessert_img1.png" alt="" />
                                </div>
                                <div className="hero_card_text">
                                    <p>
                                        Burger Club
                                        <span>105$</span>
                                    </p>
                                    <div className="Hero_star">
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                    </div>
                                </div>
                            </div>
                            <div className="hero_card">
                                <div className="hero_card_img">
                                    <img src="/src/assets/Images/menu_img/burger_img1.png" alt="" />
                                </div>
                                <div className="hero_card_text">
                                    <p>
                                        ClubCoffe
                                        <span>50$</span>
                                    </p>
                                    <div className="Hero_star">
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                    </div>
                                </div>
                            </div>
                            <div className="hero_card">
                                <div className="hero_card_img">
                                    <img src="/src/assets/Images/menu_img/juice_img1.png" alt="" />
                                </div>
                                <div className="hero_card_text">
                                    <p>
                                        Pizza Club
                                        <span>105$</span>
                                    </p>
                                    <div className="Hero_star">
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hero_img">
                        <img className="hero_img_left" src="/src/assets/Images/Hero_img/hero-bg3.png" alt="" />
                    </div>
                </div>




            </div>
        </>
    );
}

export default Hero;

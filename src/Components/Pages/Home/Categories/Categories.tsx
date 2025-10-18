import React from 'react';
import'./Categories.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../Store/Store';

const Categories:React.FC = () => {

    const {menuData}=useSelector((state:RootState)=> state.menu);

    const allCategories=[
        {
            id:'5',
            image:"📜",
            title:"Menu",
            category:"All",
            desc:"items"
        },
        {
            id:'1',
            image:"🍕",
            title:"Main Dish",
            category:"Pizza",
            desc:"dishes"
        },
        {
            id:'2',
            image:"🍔",
            title:"Burger",
            category:"Burger",
            desc:"items"
        },
        {
            id:'3',
            image:"🍰",
            title:"Dessert",
            category:"Dessert",
            desc:"dessert"
        },
        {
            id:'4',
            image:"🍹",
            title:"Drinks",
            category:"Drinks",
            desc:"drinks"
        },
    ]

    const countCategoriesItems=(category:string)=> {
        return category === "All" ? menuData.length :
        menuData.filter((item)=> item.category === category).length;
    }

    return (
        <>
        <div id="categories">
            <div className="container_box categories_box">
                <div className="categories_title">
                    {/* <p>Customer Favorites</p> */}
                    <h3 className='mt-2'>Popular Catagories</h3>
                </div>

                <div className="cate_carts">

                    {allCategories.map((item)=> (
                        <div className="cate_cart" key={item.id}>
                            <h3>{item.image}</h3>
                            <p>{item.title}</p>
                            <p>({countCategoriesItems(item.category)} {item.desc})</p>
                        </div>
                        ))
                    }

                </div>
            </div>
        </div>
        </>
    )
}

export default Categories;
import React from "react";
import Sidebar from "./SideBar";
import ProductCard from "../ProductCard";

const HeroHome = () => {
    const products = [
        {id:1, image:'path/..../image1.jpg', name:"Dress 1 ", price:'109'},
        {id:2, image:'path/..../image1.jpg', name:"Dress 1 ", price:'109'},
        {id:3, image:'path/..../image1.jpg', name:"Dress 1 ", price:'109'},
        {id:3, image:'path/..../image1.jpg', name:"Dress 1 ", price:'109'},
        {id:4, image:'path/..../image1.jpg', name:"Dress 1 ", price:'109'},
    ]
    return(
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
            <Sidebar/>

            <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {products.map((product) =>{
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                })}
            </div>
        </div>
    )
}

export default HeroHome;
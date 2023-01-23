import React from "react";
import "../style/Products.css";
import { getAllProducts } from "../api";

const Helmets = () => {

    //const products = getAllProducts();
    const products = [
        { id: 1, name: 'skates', category: 'ice skates', description: 'new pair', price: 35 },
        { id: 2, name: 'old skates', category: 'ice skates', description: 'old pair', price: 45 },

        { id: 3, name: 'stick', category: 'stick', description: 'new one', price: 25 },
        { id: 4, name: 'old stick', category: 'stick', description: 'old one', price: 15 },

        { id: 5, name: 'puck', category: 'puck', description: 'new one', price: 25 },
        { id: 6, name: 'old puck', category: 'puck', description: 'old one', price: 15 },

        { id: 7, name: 'helmet', category: 'helmets', description: 'new one', price: 25 },
        { id: 8, name: 'old helmet', category: 'helmets', description: 'old one', price: 15 },

        { id: 9, name: 'protective gear', category: 'protective gear', description: 'new one', price: 25 },
        { id: 10, name: 'old protective gear', category: 'protective gear', description: 'old one', price: 15 },

        { id: 11, name: 'goalie gear', category: 'goalie gear', description: 'new one', price: 25 },
        { id: 12, name: 'old goalie gear', category: 'goalie gear', description: 'old one', price: 15 },

        { id: 13, name: 'accessory', category: 'accessories', description: 'new one', price: 25 },
        { id: 14, name: 'old accessory', category: 'accessories', description: 'old one', price: 15 },

        { id: 15, name: 'team shirt', category: 'team apparel', description: 'new one', price: 25 },
        { id: 16, name: 'old team shirt', category: 'team apparel', description: 'old one', price: 15 },
    ]

    const filteredProducts = products.filter(_product => _product.category.includes("helmets"))
    console.log(filteredProducts)

    return (
        <div className="all-products">
            {filteredProducts.map((product) => {
                return (
                    <div key={product.id} className="single-product">
                        <div className="image">"image here"</div>
                        <h2 >{product.name}</h2>
                        <h3>${product.price}</h3>
                        <button>More Info</button>
                    </div>)
            })}
        </div>
    )
}

export default Helmets;
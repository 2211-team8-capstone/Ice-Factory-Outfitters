import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { getAllProducts } from "../api";
import SearchBar from "./SearchBar";
import "../style/Search.css";

const filterProducts = (products, query) => {
    if (!query) {
        return products;
    }

    return products.filter((products) => {
        products.name = products.name.toLowerCase();
        return products.name.includes(query);
    });
}

const Search = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(query || '');

    return (
        <Router>
            <div className="Search">
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    onSubmit={async (e) => {
                        setFilteredProducts(filterProducts(await getAllProducts(), searchQuery));
                    }}
                />
                <ul>
                    {filteredProducts.map((product) => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <li>{product.name}</li>
                        </Link>
                    ))
                    }
                </ul>
            </div>
        </Router>
    )
}

export default Search;
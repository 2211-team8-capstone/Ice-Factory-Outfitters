import React from "react";
import { useNavigate } from 'react-router-dom';
import "../style/Search.css";

const SearchBar = ({ searchQuery, setSearchQuery, onSubmit }) => {
    const navigate = useNavigate();

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={async (e) => {
                navigate.push(`?s=${searchQuery}`);
                e.preventDefault();
                onSubmit(e);
            }}>
            <h1 className="title">
                Search
            </h1>
            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                name="header-search"
                id="header-search"
                placeholder="Search the Factory"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
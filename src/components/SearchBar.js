import React from "react";
import { useHistory } from 'react-router-dom';
import "../style/Search.css";

const SearchBar = ({ searchQuery, setSearchQuery, onSubmit }) => {
    const history = useHistory();

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={async (e) => {
                history.push(`?s=${searchQuery}`);
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
                id="header-search"
                placeholder="Search Products"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
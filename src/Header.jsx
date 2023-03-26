import React from "react";

function Header(props) {
    return (
        <div className="header">
            <input
                className="search-user-input"
                type="text"
                placeholder="Search by name"
                value={props.searchTerm}
                onChange={props.onInputChange}
            />
            <select className="sort-users-by-age" onChange={props.onSort} value={props.sortOrder}>
                <option value="">Default</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <button className="resetBtn" onClick={props.onReset}>Reset Filters</button>
        </div>
    );
}


export default Header;
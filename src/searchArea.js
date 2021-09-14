// function comoponet
import React from 'react';

const SearchArea = (props) => {
    <div className="SearchArea">
        <form onSubmit={props.searchBook} action="">
            <input onchange={props.handleSearch} type="text"/>
            <button type="submit"></button>
            <select disabledvalue="sort" onchange={props.handleSort}>
                <option disabledvalue='sort'>sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </form>
    </div>
            
}
export default SearchArea